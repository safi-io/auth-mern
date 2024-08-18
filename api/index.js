import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Routes
import userRoutes from "./routes/user.route.js";
import AuthRoutes from "./routes/auth.route.js";

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB Connected"))
  .catch(() => console.log("DB not Connected"));

// Middlewares
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", AuthRoutes);
// Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => console.log("Server on 3000"));
