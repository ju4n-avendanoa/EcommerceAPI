import mongoose from "mongoose";
import { userDocument } from "../interface/auth.interface";
import bcrypt from "bcryptjs";
import "dotenv/config";

const userSchema = new mongoose.Schema<userDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

// Pre-save hook to hash the user password before saving
userSchema.pre("save", async function (next) {
  const user = this as userDocument;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(parseInt(<string>process.env.SALT));
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

const userModel = mongoose.model<userDocument>("users", userSchema);

export default userModel;
