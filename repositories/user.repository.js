const UserModel = require("../models/user.model");

const create = async userObj => UserModel.create(userObj);

const readAll = async () => UserModel.find().sort({ name: "asc" });

const readOneById = async id => UserModel.findOne({ id });

const readOneByToken = async token => UserModel.findOne({ token });

const remove = async id => UserModel.findOneAndRemove({ id });

const update = async (id, email, password, name) =>
  UserModel.findOneAndUpdate(
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
