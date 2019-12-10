const User = require("../models/user.model");

const create = async userObj => User.create(userObj);

const readAll = async () => User.find().sort({ name: "asc" });

const readOneById = async id => User.findOne({ id });

const readOneByToken = async token => User.findOne({ token });

const remove = async id => User.findOneAndRemove({ id });

const update = async (id, email, password, name) =>
  User.findOneAndUpdate(
    { id },
    { $set: { email, password, name } },
    { new: true }
  );

module.exports = {
  create,
  readAll,
  readOneById,
  readOneByToken,
  remove,
  update
};
