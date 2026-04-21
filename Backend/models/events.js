const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  img: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Gb40HM7clX1h0q9D7fs0TS3ONunukP580Q&s",
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["academic", "cultural", "sports", "career"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],

  maxAttendees: {
    type: Number,
    min: 0,
    default: 0,
  },
  createdByClub: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
