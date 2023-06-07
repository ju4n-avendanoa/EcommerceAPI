import { sign, verify } from "jsonwebtoken";
import "dotenv/config";

/**
 * Generates a JWT token with the provided user ID
 * @param id - The user ID to be included in the token
 * @returns The generated JWT token
 */
export async function generateToken(id: string) {
  const jwt = sign({ id }, <string>process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return jwt;
}

/**
 * Verifies and decodes the provided JWT token
 * @param jwt - The JWT token to be verified
 * @returns The decoded contents of the JWT token
 */
export function verifyToken(jwt: string) {
  const jwtSecret = verify(jwt, <string>process.env.JWT_SECRET);
  return jwtSecret;
}
