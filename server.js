const express = require('express');
const mongoose = require('mongoose');
const app = express();
<<<<<<< HEAD
const dotenv = require("dotenv");
const path = require("path");
=======
const dotenv = require('dotenv');

const path = require('path');

>>>>>>> b4a0fd9ac7f57f459cc13d0bc99453592e9fac1c
const port = process.env.PORT || 8080;
//Import Routes
const authRoute = require('./src/app/routes/auth');
dotenv.config({ path: path.resolve(__dirname, './.env') });

//Connect to Database
async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
<<<<<<< HEAD
    console.log("Successfully connect to Database");
  } catch (error) {
    console.log("Failed to connect to Database");
=======
    console.log('Successfully connected to Database');
  } catch (error) {
    console.log('Failed to connect to Database');
>>>>>>> b4a0fd9ac7f57f459cc13d0bc99453592e9fac1c
    console.log(error);
  }
}
connect();

// //Middleware
app.use(express.json());
// app.use(bodyParser);

// app.use("/.netlify/functions/server", authRoute);

//Middleware
app.use('/user', authRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send(`API is running on ${process.env.NODE_ENV}`);
  });
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
} else {
  app.get("/user", (req, res) => {
    res.send(`API is running on ${process.env.NODE_ENV}`);
  });
}

app.listen(port, () => {
  console.log('You are listening to port 8080');
});

module.exports = app;
// module.exports.handler = serverless(app);
