const { Router } = require("express");
const attendanceController = require("../controllers/attendance.controller");

const router = Router();

router.post("/", attendanceController.insertAttendance);

module.exports = router;
