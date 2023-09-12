const express = require("express");
const joi = require("joi");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const UserRouter = require("./src/routes/person.route.js");
dotenv.config();

//DATABASE CONNECTION
mongoose
  .connect(
    // process.env.MONGO_URI ||
      "mongodb+srv://cash2go:cash2go@cluster0.pv5xecn.mongodb.net/stageTwo?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connection establised"))
  .catch((e) => console.log("Mongo connection error: ", e.message));

//   MIDDLEWARES
const app = express();
app.use(express.json());

// ROUTE
app.use("/api", UserRouter);

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
});
