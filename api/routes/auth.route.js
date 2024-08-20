import express from "express";
import {
  signupController,
  signinController,
  google
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signupController);

router.post("/sign-in", signinController);

router.post("/google", google);

export default router;
