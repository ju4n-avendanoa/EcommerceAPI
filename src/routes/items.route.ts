import { Router, Request, Response } from "express";
import {
  createItemHandler,
  deleteItemByIdHandler,
  getItemByIdHandler,
  getItemsHandler,
  updateItemByIdHandler,
} from "../controllers/item.controller";

const itemRouter = Router();

// Health check endpoint
itemRouter.get("/healthcheck", (req: Request, res: Response) => {
  res.sendStatus(200);
});

// Get all items
itemRouter.get("/api/items", getItemsHandler);

// Get item by ID
itemRouter.get("/api/items/:id", getItemByIdHandler);

// Create a new item
itemRouter.post("/api/items", createItemHandler);

// Delete an item by ID
itemRouter.delete("/api/items/:id", deleteItemByIdHandler);

// Update an item by ID
itemRouter.patch("/api/items/:id", updateItemByIdHandler);

export default itemRouter;
