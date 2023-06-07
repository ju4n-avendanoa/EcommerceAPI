import express from "express";
import cors from "cors";
import "dotenv/config";
import itemRouter from "./routes/items.route";
import dbConnection from "./database/dbConnection";
import authRouter from "./routes/auth.route";
import orderRouter from "./routes/order.route";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5500;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(itemRouter);
app.use(authRouter);
app.use(orderRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  dbConnection();
});
