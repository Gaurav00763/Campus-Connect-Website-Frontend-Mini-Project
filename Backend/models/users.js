const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["student", "admin", "club"],
    default: "student",
  },
  branch: String,
  year: Number,
  cgpa: Number,
  skills: [String],
  interests: [String],
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  registeredDrives: [{ type: mongoose.Schema.Types.ObjectId, ref: "Drive" }],
  clubAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
const User = mongoose.model("User", UserSchema);
module.exports = User;
