const { insert } = require("../services/attendance.service");
const { readOne } = require("../services/user.service");
const {
  negateIsCheckedInAttr
} = require("../utils/negateIsCheckedInAttr.util");

const insertAttendance = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await readOne(userId);

    negateIsCheckedInAttr(user);

    const { id, isCheckedIn } = user;
    const newAttendance = await insert({ userId: id, isCheckedIn });

    res.status(200).send(newAttendance);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

module.exports = { insertAttendance };
