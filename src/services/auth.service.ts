import { omit } from "lodash";
import { Auth } from "../interface/auth.interface";
import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.handle";

/**
 * Registers a new user in the database
 * @param user - The user object containing registration details
 * @returns If successful, returns the registered user object without the password field. If user already exists, returns "User exists".
 */
export async function registerNewUser(user: Auth) {
  const checkExistentUser = await userModel.findOne({ email: user.email });
  if (checkExistentUser) return "User exists";
  const newUser = await userModel.create(user);
  return omit(newUser.toJSON(), "password");
}

/**
 * Authenticates a user by checking email and password
 * @param user - The user object containing login details
 * @returns If successful, returns a JWT token. Otherwise, returns false.
 */
export async function loginUser(user: Auth) {
  try {
    const checkUser = await userModel.findOne({ email: user.email });
    if (!checkUser) return false;
    const checkPassword = await bcrypt.compare(
      user.password,
      checkUser.password
    );
    if (!checkPassword) return false;
    const token = generateToken(checkUser._id);
    return token;
  } catch (error) {
    return false;
  }
}
