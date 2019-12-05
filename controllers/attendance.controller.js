const { insert } = require("../services/attendance.service");

const insertAttendance = async (req, res) => {
  try {
    const newAttendance = await insert(req.body);

    res.status(200).send(newAttendance);
  } catch (error) {
    res.status(400).send(error.errmsg);
  }
};

module.exports = { insertAttendance };
