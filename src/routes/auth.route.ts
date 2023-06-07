import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/api/register", register);
authRouter.post("/api/login", login);

export default authRouter;
