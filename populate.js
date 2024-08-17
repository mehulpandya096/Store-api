require("dotenv").config();

const connectDB = require("./DB/connect");
const Product = require("./model/productModels");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("SUCCESS");
    process.exit(0);
  } catch (err) {
    console.log(err);
    console.log("SOMTHING MISSING TRYAGIN");
    process.exit(1);
  }
};

start();
