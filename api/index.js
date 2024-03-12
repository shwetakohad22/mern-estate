import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB!!!");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
app.listen(3000, () => {
  console.log("server is running on PORT 3000!!!");
});

