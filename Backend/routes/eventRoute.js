const express = require("express");
const router = express.Router();
const Event = require("../models/events");
const Club = require("../models/clubs");
const User = require("../models/users");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const nodemailer = require("nodemailer");

const sendConfirmationEmail = async (email, eventName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "CampusConnect246@gmail.com",
      pass: "kkly towb kbbv smoa",
    },
  });

  const mailOptions = {
    from: "CampusConnect246@gmail.com",
    to: email,
    subject: "Event Registration Confirmation",
    text: `You have successfully registered for ${eventName}`,
  };

  await transporter.sendMail(mailOptions);
};

router.get(
  "/",
  wrapAsync(async (req, res) => {
    let events = await Event.find({});
    res.json({
      success: true,
      message: "Clubs",
      data: events,
    });
  }),
);
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let event = await Event.findById(req.params.id).lean();
    event.startDate = new Date(event.startDate).toLocaleString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });
    event.endDate = new Date(event.endDate).toLocaleString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });
    res.json({
      success: true,
      message: "Clubs",
      data: event,
    });
  }),
);
router.get("/:id/isregister", async (req, res) => {
  let { id } = req.params;
  const userId = req.user._id;
  const event = await Event.findById(id);
  const registered = event.attendees.includes(userId);
  res.json({ registered });
});
router.post(
  "/:clubId",
  wrapAsync(async (req, res) => {
    let { clubId } = req.params;
    let club = await Club.findById(clubId);
    console.log(club);
    const event = await Event.create({ ...req.body, createdByClub: clubId });
    console.log(event);
    club.events.push(event);
    await club.save();
    res.status(201).json({
      success: true,
      message: "Club created successfully",
      data: club,
    });
  }),
);
router.patch(
  "/:id/register/:userId",
  wrapAsync(async (req, res) => {
    let { id, userId } = req.params;
    const event = await Event.findById(id);
    const user = await User.findById(userId);
    event.attendees.push(user);
    await event.save();
    user.registeredEvents.push(event);
    await user.save();

    await sendConfirmationEmail(user.email, event.title);

    res.status(201).json({
      success: true,
      message: "Registered Successful",
    });
  }),
);
module.exports = router;
