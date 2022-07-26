const {response} = require("express");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/view/about.html");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/public/view/gallery.html");
});

app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + "/public/view/home.html");
});

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/public/view/works.html");
});

app.listen(3000, () => {
    console.log("Running on port 3000");
  });
  