import mongoose from "mongoose";
import { itemDocument } from "../interface/item.interface";

const itemSchema = new mongoose.Schema<itemDocument>(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    gas: { type: String, enum: ["electric", "diesel", "gas"], required: true },
    year: { type: Number, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

const itemModel = mongoose.model("items", itemSchema);

export default itemModel;
