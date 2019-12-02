const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is up and running on port numner " + process.env.PORT);
});
