const { insert } = require("../services/attendance.service");
const { readOne } = require("../services/user.service");
const {
  checkIsTokenAttrNull,
  checkIsTokensMatch,
  negateIsCheckedInAttr,
  saveTokenAttrValue
} = require("../utils/index.utils");

const insertAttendance = async (req, res) => {
  try {
    const { userId, token } = req.body;
    const user = await readOne(userId);

    const isTokenNull = checkIsTokenAttrNull(user);

    if (isTokenNull) {
      await saveTokenAttrValue(user, token);
    }

    const isTokensMatch = checkIsTokensMatch(user.token, token);

    if (!isTokensMatch) {
      return res
        .status(400)
        .send(
          "Phone's unique identifier doesn't match with the one in the database"
        );
    }

    negateIsCheckedInAttr(user);

    const { id, isCheckedIn } = user;
    const newAttendance = await insert({ userId: id, isCheckedIn });

    return res.status(200).send(newAttendance);
  } catch (error) {
    return res.status(400).send(error.errmsg);
  }
};

module.exports = { insertAttendance };
