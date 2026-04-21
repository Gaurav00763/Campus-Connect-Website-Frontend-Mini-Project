const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/users");
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const clubRoute = require("./routes/clubRoute");
const driveRoute = require("./routes/driveRoute");
const eventRoute = require("./routes/eventRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

// const MONGO_DB = "mongodb://127.0.0.1:27017/CampusConnect";
// const PORT = 5000;

const MONGO_DB = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const origin: process.env.FRONTEND_URL || "http://localhost:5173"

async function main() {
  await mongoose.connect(MONGO_DB);
  console.log("Database connection successful");
}

main().catch(err => console.error("Database connection error:", err));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    User.authenticate(),
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log("App is listening 5000");
});

//Club Route
app.use("/clubs", clubRoute);
//Event Route
app.use("/events", eventRoute);
//User Route
app.use("/users", userRoute);
//Placemnt Drive Route
app.use("/drives", driveRoute);
//User Verfiy/Register Route
app.use("/", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message: message,
  });
});
