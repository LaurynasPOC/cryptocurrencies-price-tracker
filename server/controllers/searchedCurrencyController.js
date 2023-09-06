const searchedCryptoRouter = require("express").Router();
const CryptoCurrencies = require("../models/cryptocurrency");

searchedCryptoRouter.post("/searched", async (req, res, next) => {
  const body = req.body;

  if (!body.title) {
    return res.status(400).json({ error: "Missing title" });
  }

  try {
    const updatedCryptocurrency = await CryptoCurrencies.findOneAndUpdate(
      { title: body.title },
      { $inc: { searched: 1 } },
      { new: true, upsert: true }
    );

    console.log(`User searched for cryptocurrency: ${body.title}`);

    res.status(200).json(updatedCryptocurrency);
  } catch (error) {
    next(error);
  }
});

module.exports = searchedCryptoRouter;
