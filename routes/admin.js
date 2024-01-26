const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { auth, isAdmin } = require("../middleware/auth");
router.get("/", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Protected Route for Admin",
  });
});

module.exports = { adminRoute: router };
