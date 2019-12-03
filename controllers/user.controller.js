const { create, read, remove, update } = require("../services/user.service");
const uuidv1 = require("uuid");

const createUser = async (req, res) => {
  try {
    const id = uuidv1();
    const newUser = await create({ ...req.body, id });

    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await remove(id);

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
    const users = await read();

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await update(req.body);

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
