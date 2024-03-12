import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on PORT 3000!!!");
});

app.use("/api/user", UserRouter);
app.use("/api/auth", authRouter);
