const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const attendanceRoute = require("./src/routes/attendance.route");
const userRoute = require("./src/routes/user.route");

dotenv.config();

const nodeEnv = process.env.NODE_ENV || "dev";
let dbUrl;

if (nodeEnv === "dev") dbUrl = process.env.LOCAL_DB_URL;
else dbUrl = process.env.CLOUD_DB_URL;

mongoose.connect(dbUrl, {
  dbName: process.env.DB_NAME,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/attendance", attendanceRoute);

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
  console.log("Server is listening at PORT " + process.env.PORT);
});
