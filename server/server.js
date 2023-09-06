const express = require("express");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const cors = require("cors");
const ccxt = require("ccxt");
const app = express();
const port = 4000;
const searchedCurrencyController = require("./controllers/searchedCurrencyController");
const selectedCurrencyController = require("./controllers/selectedCurrencyController");
const currencyDataController = require("./controllers/currencyDataController");
const currenciesDataController = require("./controllers/currenciesDataController");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());

app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/cryptocurrencies", searchedCurrencyController);
app.use("/api/cryptocurrencies", selectedCurrencyController);
app.use("/data", currencyDataController);
app.use("/", currenciesDataController);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
