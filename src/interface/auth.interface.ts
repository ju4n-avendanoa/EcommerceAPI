import { Document } from "mongoose";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface Auth {
  email: string;
  password: string;
}

export interface userDocument extends Auth, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}
