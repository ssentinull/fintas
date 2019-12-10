const attendanceService = require("../services/attendance.service");

const insertAttendance = async (req, res) => {
  try {
    const newAttendance = await attendanceService.insert(req);

    return res.status(200).send(newAttendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { insertAttendance };
