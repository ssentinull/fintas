const attendanceService = require("../services/attendance.service");

const insertAttendance = async (req, res) => {
  try {
    const newAttendance = await attendanceService.insert(req);

    return res.status(200).send(newAttendance);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const readAllAttendances = async (req, res) => {
  try {
    const attendances = await attendanceService.readAll();

    return res.status(200).send(attendances);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const readUserAttendances = async (req, res) => {
  try {
    const attendances = await attendanceService.readUser(req.params.userId);

    return res.status(200).send(attendances);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { insertAttendance, readAllAttendances, readUserAttendances };
