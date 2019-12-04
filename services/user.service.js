const User = require("../models/user.model");

const create = userObj => User.create(userObj);

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
