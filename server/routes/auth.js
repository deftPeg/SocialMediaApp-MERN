import express from "express";
import { login } from "../controllers/auth.js";

/* SET UP ROUTER */
const router = express.Router();

router.post("/login", login);

export default router;