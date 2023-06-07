import { Router, Request, Response } from "express";
import {
  createItemHandler,
  deleteItemByIdHandler,
  getItemByIdHandler,
  getItemsHandler,
  updateItemByIdHandler,
} from "../controllers/item.controller";
import { checkJwtToken } from "../middleware/session";

const itemRouter = Router();

itemRouter.get("/healthcheck", (req: Request, res: Response) => {
  res.sendStatus(200);
});

itemRouter.get("/api/items", getItemsHandler);
itemRouter.get("/api/items/:id", getItemByIdHandler);
itemRouter.post("/api/items", createItemHandler);
itemRouter.delete("/api/items/:id", deleteItemByIdHandler);
itemRouter.patch("/api/items/:id", updateItemByIdHandler);

export default itemRouter;
