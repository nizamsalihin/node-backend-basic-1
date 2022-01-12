const express = require("express");
const route = express.Router();

route.get("/", (req, res, next) => {
  console.log("get request in places");
  // any data type
  res.json({ message: "it works" }); // automaticly sendback data as API
});

module.exports = route;
