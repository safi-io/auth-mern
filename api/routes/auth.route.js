import express from "express";
import { authTest } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", authTest);

export default router;
