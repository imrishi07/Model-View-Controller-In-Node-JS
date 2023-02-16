const express = require("express");
const mongoose = require("mongoose");
const mongodb_Url = "mongodb://127.0.0.1:27017/Company";
const employeeRoute = require("./routes/employeeRoute");
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(mongodb_Url)
  .then(() => console.log("Connected sucessfull!!!"))
  .catch((err) => console.log(err));

app.use("/", employeeRoute);

app.listen(3000, () => {
  console.log("Server is running.....");
});
