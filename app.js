const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//How to listen to server w/ port
const port = 3000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server Connected (Port: ${port})`);
});
