const attendanceRepository = require("../repositories/attendance.repository");
const userRepository = require("../repositories/user.repository");
const uuidv1 = require("uuid");
const {
  checkIsTokenAttrNull,
  checkIsTokensMatch,
  negateIsCheckedInAttr,
  saveTokenAttrValue
} = require("../utils/index.utils");

const insert = async req => {
  const { userId, token } = req.body;
  const user = await userRepository.readOne(userId);

  const isTokenNull = checkIsTokenAttrNull(user);

  if (isTokenNull) {
    await saveTokenAttrValue(user, token);
  }

  const isTokensMatch = checkIsTokensMatch(user.token, token);

  if (!isTokensMatch) {
    throw Error(
      "Phone's unique identifier doesn't match with the one in the database"
    );
  }

  await negateIsCheckedInAttr(user);

  const { isCheckedIn } = user;
  const attendanceId = uuidv1();
  const newAttendance = await attendanceRepository.insert({
    id: attendanceId,
    userId,
    isCheckedIn
  });

  return newAttendance;
};

module.exports = { insert };
