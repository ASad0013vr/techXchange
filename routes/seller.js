const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { auth, isSeller } = require("../middleware/auth");
router.get("/", auth, isSeller, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Protected Route for Sellers",
  });
});
module.exports = { sellerRoute: router };
