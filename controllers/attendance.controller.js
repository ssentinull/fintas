const { insert } = require("../services/attendance.service");
const { readOne } = require("../services/user.service");
const {
  negateIsCheckedInAttr
} = require("../utils/negateIsCheckedInAttr.util");
const { checkIsTokenAttrNull } = require("../utils/checkIsTokenAttrNull.util");
const { checkIsTokensMatch } = require("../utils/checkIsTokensMatch.util");
const { saveTokenAttrValue } = require("../utils/saveTokenAttrValue.util");

const insertAttendance = async (req, res) => {
  try {
    const { userId, token } = req.body;
    const user = await readOne(userId);

    const isTokenNull = checkIsTokenAttrNull(user);

    if (isTokenNull) {
      saveTokenAttrValue(user, token);
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
