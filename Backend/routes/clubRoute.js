const express = require("express");
const router = express.Router();
const Club = require("../models/clubs");
const User = require("../models/users");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    let clubs = await Club.find({});
    res.json({
      success: true,
      message: "Clubs",
      data: clubs,
    });
  }),
);
router.get("/:id", async (req, res) => {
  let club = await Club.findById(req.params.id).populate("events");
  res.status(201).json({
    success: true,
    data: club,
  });
});
router.post(
  "/:id/create",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let user = await User.findById(id);
    const club = new Club(req.body);
    await club.save();
    if (user.role === "student") {
      res.status(402).json({
        success: false,
        message: "Your dont have access",
      });
    }
    user.clubAdmin = club._id;
    user.save();
    res.status(201).json({
      success: true,
      message: "Club created successfully",
      data: club,
    });
  }),
);

router.put(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let club = await Club.findByIdAndUpdate(id, { ...req.body }, { new: true });
    if (!club) {
      console.log("dfghjk");
      next(new ExpressError(400, "Club not found"));
      return;
    }
    res.status(201).json({
      success: true,
      message: "Club Updated",
      data: club,
    });
  }),
);

router.delete(
  "/:id/delete",
  wrapAsync(async (req, res, next) => {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) {
      console.log("dfghjk");
      next(new ExpressError(400, "Club not found"));
      return;
    }
    res.json({ success: true, message: "Club Deleted" });
  }),
);

module.exports = router;
