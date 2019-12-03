const User = require("../models/user.model");

const create = userObj => User.create(userObj);

const remove = id => User.findOneAndRemove({ id });

const read = () => User.find().sort({ email: "asc" });

const update = async userObj => {
  const { id, email, password } = userObj;

  return User.findOneAndUpdate(
    { id },
    { $set: { email, password } },
    { new: true }
  );
};

module.exports = { create, read, remove, update };
