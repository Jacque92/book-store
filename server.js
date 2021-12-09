const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const path = require("path");

const port = process.env.PORT || 8080;
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
// app.use(bodyParser);

// app.use("/.netlify/functions/server", authRoute);

//Middleware
app.use("/user", authRoute);

app.listen(port, () => {
  console.log("You are listening to port 8080");
});

module.exports = app;
// module.exports.handler = serverless(app);
