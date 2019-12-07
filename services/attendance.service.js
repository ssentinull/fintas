const attendanceRepository = require("../repositories/attendance.repository");
const uuidv1 = require("uuid");

const insert = attendanceObj => {
  const id = uuidv1();

  return attendanceRepository.insert({ ...attendanceObj, id });
};

module.exports = { insert };
