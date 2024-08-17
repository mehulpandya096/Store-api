require("dotenv").config();
// async error
require('express-async-errors')
const express = require("express");
const app = express();
const connectDB = require("./DB/connect");
const routers = require("./routes/routes");
var bodyParser = require("body-parser");

//!middelware
// const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 7000;

//* middelware
// app.use(notFound);
app.use(errorMiddleware);

// product routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/ver1/products", routers);

app.get("/", (req, res) => {
  console.log("here De bug a code");
  res.send("Hello word");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`port Running on port No ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
