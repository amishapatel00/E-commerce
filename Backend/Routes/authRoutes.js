import express from "express";
import { signupUser } from "../Controllers/Authcontrollers.js";

const router = express.Router();
router.post("/signup", signupUser);
export default router;
