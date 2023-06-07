import { loginUser, registerNewUser } from "../services/auth.service";
import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  const newUser = await registerNewUser(req.body);
  res.status(200).json(newUser);
}

export async function login(req: Request, res: Response) {
  const userLogin = await loginUser(req.body);
  if (!userLogin)
    return res.status(403).json({ message: "Invalid email or password" });

  res.cookie("token", userLogin, {
    httpOnly: true,
  });
  res.json("User logged in successfully");
}
