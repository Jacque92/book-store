const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const path = require("path");

//Import Routes
const authRoute = require("./src/app/routes/auth");

dotenv.config({ path: path.resolve(__dirname, "./.env") });

//Connect to Database
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  async () => {
    console.log("Successfully connect to Database");
  }
);

// //Middleware
app.use(express.json());

//Middleware
app.use("/user", authRoute);

app.listen(8080, () => {
  console.log("You are listening to port 8080");
});
