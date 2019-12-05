const User = require("../models/user.model");
const uuidv1 = require("uuid");

const create = async userObj => {
  const [id, isCheckedIn] = [uuidv1(), false];

  return User.create({ ...userObj, id, isCheckedIn });
};

const remove = id => User.findOneAndRemove({ id });

const read = () => User.find().sort({ name: "asc" });

const update = async userObj => {
  const { id, email, password, name } = userObj;

  return User.findOneAndUpdate(
    { id },
    { $set: { email, password, name } },
    { new: true }
  );
};

module.exports = { create, read, remove, update };
