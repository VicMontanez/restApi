const express = require("express");

const app = express();

//Middlewares
app.use(auth);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on post");
});

//How to listen to server w/ port

const port = 3000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server Connected (Port: ${port})`);
});
