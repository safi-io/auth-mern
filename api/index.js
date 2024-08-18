import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB Connected"))
  .catch(() => console.log("DB not Connected"));

app.use("/", userRoutes);

app.listen(3000, () => console.log("Server on 3000"));
