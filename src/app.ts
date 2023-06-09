import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnection from "./database/dbConnection";
import authRouter from "./routes/auth.route";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5500;

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(cookieParser()); // Parse cookies in incoming requests
app.use(express.json()); // Parse JSON in incoming requests
app.use(authRouter); // Use the authRouter for handling authentication routes

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  dbConnection(); // Connect to the database
});
