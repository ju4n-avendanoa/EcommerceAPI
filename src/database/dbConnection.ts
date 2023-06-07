import mongoose from "mongoose";
import "dotenv/config";

async function dbConnection(): Promise<void> {
  try {
    await mongoose.connect(<string>process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error: any) {
    console.error("Could not connect to the database");
  }
}

export default dbConnection;
