const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");
const uuidv1 = require("uuid");

const SALT_ROUNDS = 10;

const create = async userObj => {
  const [id, isCheckedIn, token] = [uuidv1(), false, null];
  const salt = await bcrypt.genSalt(SALT_ROUNDS);

  userObj.password = await bcrypt.hash(userObj.password, salt);

  return userRepository.create({ ...userObj, id, isCheckedIn, token });
};

const remove = id => userRepository.remove(id);

const readAll = () => userRepository.readAll();

const readOne = id => userRepository.readOneById(id);

const update = async userObj => {
  const { id, email, password, name } = userObj;

  return userRepository.update(id, email, password, name);
};

module.exports = { create, readAll, readOne, remove, update };
