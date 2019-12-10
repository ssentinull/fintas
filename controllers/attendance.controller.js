const attendanceService = require("../services/attendance.service");

const insertAttendance = async (req, res) => {
  try {
    const newAttendance = await attendanceService.insert(req);

    return res.status(200).send(newAttendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const readAttendances = async (req, res) => {
  try {
    const attendances = await attendanceService.readAll();

    return res.status(200).send(attendances);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { insertAttendance, readAttendances };
