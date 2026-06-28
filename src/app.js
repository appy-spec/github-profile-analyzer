const express = require("express");
const cors = require("cors");
const routes = require("./routes/profileRoute.js");
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
