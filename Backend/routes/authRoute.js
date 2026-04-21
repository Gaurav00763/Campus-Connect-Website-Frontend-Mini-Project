const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/users");

router.get("/currUser", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "User not logged in",
    });
  }
  let user = await User.findById(req.user._id)
    .populate("registeredEvents")
    .populate("registeredDrives")
    .populate("clubAdmin");
  res.json({
    success: true,
    user: user,
  });
});
router.post("/register", async (req, res) => {
  const {
    name,
    password,
    email,
    role,
    branch = "",
    year = "",
    cgpa = "",
    skills = [],
    interests = [],
  } = req.body;
  const user = new User({
    name,
    email,
    role,
    branch,
    year,
    cgpa,
    skills,
    interests,
  });

  const registeredUser = await User.register(user, password);
  if (role === "student") {
    req.session.user = registeredUser;
  }
  if (registeredUser) {
    res.json({
      success: true,
      message: "Registered Successfully",
      user: registeredUser,
    });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ success: true, message: "Logout Successfull" });
  });
});

module.exports = router;
