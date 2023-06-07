import mongoose from "mongoose";

export interface UserInput {
  name: string;
  color: string;
  gas: "diesel" | "electric";
  year: number;
  description: string;
  price: number;
}

export interface itemDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
