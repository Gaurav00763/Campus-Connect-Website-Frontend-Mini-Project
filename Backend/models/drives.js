const mongoose = require("mongoose");

const PlacementDriveSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    branches: [String], // ["CSE", "ECE"]
    minCGPA: {
      type: Number,
      default: 0,
    }, // e.g. 7.0
    year: [Number], // [3, 4]
    skills: [String], // optional
  },

  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Drive = mongoose.model("Drive", PlacementDriveSchema);
module.exports = Drive;
