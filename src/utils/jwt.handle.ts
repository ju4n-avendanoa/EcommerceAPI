import { sign, verify } from "jsonwebtoken";
import "dotenv/config";

export async function generateToken(id: string) {
  const jwt = sign({ id }, <string>process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwt;
}

export function verifyToken(jwt: string) {
  const jwtSecret = verify(jwt, <string>process.env.JWT_SECRET);
  return jwtSecret;
}
