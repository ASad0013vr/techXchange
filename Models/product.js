const { mongoose } = require("mongoose");
const productDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    enum: [
      "Samsung",
      "Xiaomi",
      "Apple",
      "OPPO",
      "Vivo",
      "realme",
      "Huawei",
      "Honor",
      "Motorola",
      "Nokia",
      "OnePlus",
      "Amazon",
      "Microsoft",
    ],
  },
});
