const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    // console.log(token);

    if (!token || token === undefined) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;
    } catch (e) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protect route for Admins,you can not access it",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};
exports.isSeller = (req, res, next) => {
  try {
    if (req.user.role !== "Seller") {
      return res.status(401).json({
        success: false,
        message: "This is a protect route for Seller,you can not access it",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};
