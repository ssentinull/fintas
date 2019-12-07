const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const newUser = await userService.create(req.body);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.remove(id);

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
    const users = await userService.readAll();

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, email, password, name } = req.body;
    const updatedUser = await userService.update({ id, email, password, name });

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
