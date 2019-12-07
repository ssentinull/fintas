const User = require("../models/user.model");
const uuidv1 = require("uuid");

const create = async userObj => {
  const [id, isCheckedIn, token] = [uuidv1(), false, null];

  return User.create({ ...userObj, id, isCheckedIn, token });
};

const remove = id => User.findOneAndRemove({ id });

const readAll = () => User.find().sort({ name: "asc" });

const readOne = id => User.findOne({ id });

const update = async userObj => {
  const { id, email, password, name } = userObj;

  return User.findOneAndUpdate(
    { id },
    { $set: { email, password, name } },
    { new: true }
  );
};

module.exports = { create, readAll, readOne, remove, update };
