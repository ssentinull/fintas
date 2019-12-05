const { model, Schema } = require("mongoose");

const AttendanceSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    status: { type: Boolean, required: true }
  },
  { timestamps: true }
);

module.exports = model("Attendance", AttendanceSchema);
