const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const newUser = await userService.create(req.body);

    return res.status(200).send(newUser);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.remove(id);

    if (!deletedUser) {
      res.status(400).send(`User with id ${id} doesn't exist`);
    }

    return res.status(200).send(deletedUser);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.readOneByEmail(email);

    if (!user) {
      return res
        .status(200)
        .json({ success: 0, message: "Email doesn't exist in our database" });
    }

    const isLoggedIn = await userService.login(password, user.password);

    if (!isLoggedIn) {
      return res
        .status(200)
        .json({ success: 0, message: "Email and password is incorrect" });
    }

    return res.status(200).send({ ...user, success: 1 });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const readUser = async (req, res) => {
  try {
    const user = await userService.readOneById(req.params.id);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

const readUsers = async (req, res) => {
  try {
    const users = await userService.readAll();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, email, password, name } = req.body;
    const updatedUser = await userService.update({ id, email, password, name });

    if (!updatedUser) {
      res.status(400).send(`User with id ${id} doesn't exist`);
    }

    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

const test = (req, res) => res.send("hello");

module.exports = {
  createUser,
  deleteUser,
  loginUser,
  readUser,
  readUsers,
  test,
  updateUser
};
