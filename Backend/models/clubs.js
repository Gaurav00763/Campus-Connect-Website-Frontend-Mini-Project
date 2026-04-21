const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  img: {
    type: String,
    default:
      "https://market-resized.envatousercontent.com/previews/files/642805653/Preview.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=f0f598dc840e85714af1814bea1fd7f74e4c40ff273b5403b95a16816623b968",
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});
const Club = mongoose.model("Club", ClubSchema);
module.exports = Club;
