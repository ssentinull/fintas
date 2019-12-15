const { model, Schema } = require("mongoose");

const AttendanceSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    isCheckedIn: { type: Boolean, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Attendance", AttendanceSchema);
