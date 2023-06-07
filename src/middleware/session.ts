import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/auth.interface";

export function checkJwtToken(
  req: RequestExt,
  res: Response,
  next: NextFunction
) {
  try {
    const jwtByUser = req.cookies.token || "";
    const user = verifyToken(`${jwtByUser}`);
    if (!user) {
      console.log("error");
      res.sendStatus(403);
    } else {
      req.user = user;
      next();
    }
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}
