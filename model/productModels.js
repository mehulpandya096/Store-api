// Lets make a schema for

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Product name must require",
  },
  price: { 
    type: Number,
    required: [true, "prise must be provided"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not Supported",
    },
    //enum : ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Products", productSchema);
