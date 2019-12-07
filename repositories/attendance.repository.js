const AttendanceModel = require("../models/attendance.model");

const insert = async attendanceObj => AttendanceModel.create(attendanceObj);

module.exports = { insert };
