const express = require("express");
const employeeRoute = express();
const bodyParser = require("body-parser");
const { insertEmployee } = require("../controllers/employeeController");

employeeRoute.use(bodyParser.json());
employeeRoute.use(bodyParser.urlencoded({ extended: true }));

employeeRoute.set("view engine", "pug");
employeeRoute.set("views", "./views");

employeeRoute.get("/register", (req, res) => {
  res.render("register");
});

employeeRoute.post("/register", insertEmployee);

module.exports = employeeRoute;
