const User = require("../models/user.model");
const uuidv1 = require("uuid");

const create = async (req, res) => {
  try {
    const [{ email, password }, id] = [req.body, uuidv1()];
    const newUser = await User.create({
      id: id,
      email: email,
      password: password
    });

    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const readAll = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const test = (req, res) => res.send("hello");

module.exports = { create, readAll, test };
