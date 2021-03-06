const attendanceRepository = require("../repositories/attendance.repository");
const userRepository = require("../repositories/user.repository");
const uuidv1 = require("uuid");
const {
  checkIsTokenAttrNull,
  checkIsTokenDuplicate,
  checkIsTokensMatch,
  negateIsCheckedInAttr,
  saveTokenAttrValue
} = require("../utils/index.utils");

const insert = async req => {
  const { token, userId } = req.body;
  const user = await userRepository.readOneById(userId);
  const isTokenNull = checkIsTokenAttrNull(user);

  if (isTokenNull) {
    const isTokenDuplicate = await checkIsTokenDuplicate(token);

    if (isTokenDuplicate) {
      throw Error(
        "Device with this unique identifier already exists in the database"
      );
    }

    await saveTokenAttrValue(user, token);
  }

  const isTokensMatch = checkIsTokensMatch(user.token, token);

  if (!isTokensMatch) {
    throw Error(
      "Phone's unique identifier doesn't match with the one in the database"
    );
  }

  await negateIsCheckedInAttr(user);

  const [{ name, isCheckedIn }, attendanceId] = [user, uuidv1()];
  const newAttendance = await attendanceRepository.insert({
    id: attendanceId,
    name,
    userId,
    isCheckedIn
  });

  return newAttendance;
};

const readAll = () => attendanceRepository.readAll();

const readUser = userId => attendanceRepository.readUser(userId);

module.exports = { insert, readAll, readUser };
