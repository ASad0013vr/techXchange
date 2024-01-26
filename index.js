const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { adminRoute } = require("./routes/admin");
const { sellerRoute } = require("./routes/seller");
const { userRoute } = require("./routes/user");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

require("./config/database").connect();

// route import and mount

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/seller", sellerRoute);

// Activate
app.listen(PORT, () => {
  console.log("Server Run at ", PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Auth App</h1>");
});
