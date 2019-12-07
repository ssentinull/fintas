const User = require("../models/user.model");

const create = async userObj => User.create(userObj);

const remove = async id => User.findOneAndRemove({ id });

const readAll = async () => User.find().sort({ name: "asc" });

const readOne = async id => User.findOne({ id });

const update = async (id, email, password, name) =>
  User.findOneAndUpdate(
    { id },
    { $set: { email, password, name } },
    { new: true }
  );

module.exports = { create, readAll, readOne, remove, update };
