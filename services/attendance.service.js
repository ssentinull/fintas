const AttendanceModel = require("../models/attendance.model");
const uuidv1 = require("uuid");

const insert = attendanceObj => {
  const id = uuidv1();

  return AttendanceModel.create({ ...attendanceObj, id });
};

module.exports = { insert };
