import express from "express";
import { checkJwtToken } from "../middleware/session";
import {
  getItemByIdHandler,
  getItemsHandler,
} from "../controllers/item.controller";

const orderRouter = express.Router();

orderRouter.get("/api/orders", checkJwtToken, getItemsHandler);

export default orderRouter;
