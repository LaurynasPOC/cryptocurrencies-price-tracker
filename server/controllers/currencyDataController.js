const ccxt = require("ccxt");
const cryptoDataRouter = require("express").Router();

const fetchData = async (req, res) => {
  const exchange = new ccxt.binance();
  const fullSymbol = `${req.params.symbol}/${req.params.market}`;
  const { timeframe } = req.params;

  try {
    const data = await exchange.fetchOHLCV(fullSymbol, timeframe);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
};

cryptoDataRouter.get("/:symbol/:market/:timeframe", fetchData);

module.exports = cryptoDataRouter;
