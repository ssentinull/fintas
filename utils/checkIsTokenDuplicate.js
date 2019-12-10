const userRepository = require("../repositories/user.repository");

const checkIsTokenDuplicate = async token => {
  const user = await userRepository.readOneByToken(token);

  return user ? true : false;
};

module.exports = { checkIsTokenDuplicate };
