const User = require("../models/user.model");
const uuidv1 = require("uuid");

const createUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndRemove({ id });

    if (!deletedUser) {
      res.status(400).send(`User with id ${id} doesn't exist`);
    }

    res.status(200).send(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

const readUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, email, password } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { id },
      { $set: { email, password } },
      { new: true }
    );

    if (!updatedUser) {
      res.status(400).send(`User with id ${id} doesn't exist`);
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

const test = (req, res) => res.send("hello");

module.exports = { createUser, deleteUser, readUsers, test, updateUser };
