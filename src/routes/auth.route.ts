import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const authRouter = Router();

// Register a new user
authRouter.post("/api/register", register);

// User login
authRouter.post("/api/login", login);

export default authRouter;
