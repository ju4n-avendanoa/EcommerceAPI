import { omit } from "lodash";
import { Auth } from "../interface/auth.interface";
import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.handle";

export async function registerNewUser(user: Auth) {
  const checkExistentUser = await userModel.findOne({ email: user.email });
  if (checkExistentUser) return "User exists";
  const newUser = await userModel.create(user);
  return omit(newUser.toJSON(), "password");
}

export async function loginUser(user: Auth) {
  try {
    const checkUSer = await userModel.findOne({ email: user.email });
    if (!checkUSer) return false;
    const checkPassword = await bcrypt.compare(
      user.password,
      checkUSer.password
    );
    if (!checkPassword) return false;
    const token = generateToken(checkUSer._id);
    return token;
  } catch (error) {
    return false;
  }
}
