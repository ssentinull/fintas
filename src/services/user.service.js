const bcrypt = require("bcrypt");
const uuidv1 = require("uuid");
const userRepository = require("../repositories/user.repository");

const SALT_ROUNDS = 10;

const create = async userObj => {
  const [id, isCheckedIn, token] = [uuidv1(), false, null];
  const salt = await bcrypt.genSalt(SALT_ROUNDS);

  userObj.password = await bcrypt.hash(userObj.password, salt);

  return userRepository.create({ ...userObj, id, isCheckedIn, token });
};

const login = (requestPassword, userPassword) =>
  bcrypt.compare(requestPassword, userPassword);

const readAll = () => userRepository.readAll();

const readOneById = id => userRepository.readOneById(id);

const readOneByEmail = email => userRepository.readOneByEmail(email);

const remove = id => userRepository.remove(id);

const resetTokenByUserId = async id => {
  const user = await userRepository.readOneById(id);

  user.token = null;
  user.save();

  return user;
};

const update = async userObj => {
  const { id, email, password, name } = userObj;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);

  return userRepository.update(id, email, hashedPassword, name);
};

module.exports = {
  create,
  login,
  readAll,
  readOneById,
  readOneByEmail,
  remove,
  resetTokenByUserId,
  update
};
