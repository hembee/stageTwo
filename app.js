const express = require("express");
const joi = require("joi");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan")
const userRouter = require("./src/routes/person.route.js");
dotenv.config();

const PORT = process.env.PORT;

//DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connection establised"))
  .catch((e) => console.log("Mongo connection error: ", e.message));

//   MIDDLEWARES
const app = express();
app.use(express.json());
app.use(morgan("tiny"))

// ROUTE
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
});
