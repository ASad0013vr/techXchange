const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("Database Connection established");
    })
    .catch((err) => {
      console.log("Connection Issues with Database");
      process.exit(1);
    });
};
