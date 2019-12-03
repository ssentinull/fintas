const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");

dotenv.config();

mongoose.connect(process.env.CLOUD_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is listening at PORT " + process.env.PORT);
});
