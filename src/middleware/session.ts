import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/auth.interface";

/**
 * Middleware to check the validity of a JWT token in the request
 * @param req - The request object
 * @param res - The response object
 * @param next - The next function to call if token is valid
 */
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
      res.sendStatus(403); // Send a 403 Forbidden status if the token is invalid or missing
    } else {
      req.user = user; // Attach the decoded user information to the request object for further processing
      next(); // Call the next middleware or route handler
    }
  } catch (error: any) {
    res.status(404).json({ error: error.message }); // Send a 404 Not Found status with the error message if an error occurs during token verification
  }
}
