const selectedCryptoRouter = require("express").Router();
const CryptoCurrencies = require("../models/cryptocurrency");

selectedCryptoRouter.post("/selected", async (req, res, next) => {
  const body = req.body;

  if (!body.title) {
    return res.status(400).json({ error: "Missing title" });
  }

  try {
    const updatedCryptocurrency = await CryptoCurrencies.findOneAndUpdate(
      { title: body.title },
      { $inc: { selected: 1 } },
      { new: true, upsert: true }
    );
    console.log(`User selected ${body.title} cryptocurrency`);
    res.status(200).json(updatedCryptocurrency);
  } catch (error) {
    next(error);
  }
});

module.exports = selectedCryptoRouter;
