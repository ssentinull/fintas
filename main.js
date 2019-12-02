const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const userRoute = require("./routes/user.route");
const { mongoConnection } = require("./db/mongo.db");

dotenv.config();

mongoConnection((err, client) => {
  if (err) {
    console.log(err);
  }

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/user", userRoute);

  app.listen(process.env.PORT, () => {
    console.log("Server is listening at PORT " + process.env.PORT);
  });
});
