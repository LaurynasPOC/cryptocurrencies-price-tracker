const ccxt = require("ccxt");
const currenciesDataRouter = require("express").Router();

const getAllSymbols = async (req, res) => {
  const exchange = new ccxt.binance();

  try {
    await exchange.loadMarkets();

    const tickers = await exchange.fetchTickers();

    const symbolsWithPrices = [];

    for (let symbol in tickers) {
      if (!symbol.endsWith("/USD") && !symbol.endsWith("/USDT")) {
        continue;
      }

      const result = symbol.split("/")[0].toLowerCase();

      const lastPrice = tickers[symbol].last;
      const openPrice = tickers[symbol].open;

      if (typeof lastPrice !== "number" || lastPrice === 0) {
        continue;
      }

      const changeRate =
        openPrice !== 0 && typeof openPrice === "number"
          ? ((lastPrice - openPrice) / openPrice) * 100
          : 0;

      symbolsWithPrices.push({
        name: symbol.split("/")[0],
        price: lastPrice,
        changeRate: changeRate.toFixed(2) + "%",
        icon: `https://coinicons-api.vercel.app/api/icon/${result}`,
      });
    }

    res.json(symbolsWithPrices);
  } catch (error) {
    console.error("Error fetching all symbols and their prices:", error);
    res.status(500).send("Error fetching all symbols and their prices");
  }
};

currenciesDataRouter.get("/all-symbols", getAllSymbols);

module.exports = currenciesDataRouter;
