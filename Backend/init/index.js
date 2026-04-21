const mongoose = require("mongoose");
const Club = require("../models/clubs");
const Event = require("../models/events");
const Drive = require("../models/drives");
const { clubsData } = require("./clubData");
const { placementDrives } = require("./drivedata");
const events = require("./eventData");

const MONGO_DB = "mongodb://127.0.0.1:27017/CampusConnect";

async function seedDB() {
  try {
    await mongoose.connect(MONGO_DB);
    console.log("Database connection successful");
    await Club.deleteMany({});
    await Event.deleteMany({});
    await Drive.deleteMany({});
    console.log("Old data deleted");
    await Club.insertMany(clubsData);
    await Event.insertMany(events);
    await Drive.insertMany(placementDrives);
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}
seedDB();
