import express from "express";
import { signupController, signinController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signupController);

router.post("/sign-in", signinController)

export default router;
