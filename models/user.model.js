const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  isCheckedIn: { type: Boolean, required: true },
  token: { type: String, unique: true }
});

module.exports = model("User", UserSchema);
