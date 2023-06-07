import { Request, Response } from "express";
import {
  createItem,
  deleteItemById,
  getItemById,
  getItems,
  updateItemById,
} from "../services/item.service";
import { RequestExt } from "../interface/auth.interface";

// Handler for getting all items

export async function getItemsHandler(req: RequestExt, res: Response) {
  try {
    const items = await getItems();
    if (!items) return res.json({ message: "No items were found" });
    res.json(items);
  } catch (error: any) {
    res.status(403).json({ error: error.message });
  }
}

// Handler for getting an item by ID

export async function getItemByIdHandler(req: RequestExt, res: Response) {
  try {
    console.log(req.user);
    const item = await getItemById(req.params.id);
    if (!item) return res.json({ message: "No item was found" });
    res.json(item);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

// Handler for creating a new item

export async function createItemHandler(req: Request, res: Response) {
  try {
    const newItem = await createItem(req.body);
    res.json(newItem);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// Handler for deleting an item by ID

export async function deleteItemByIdHandler(req: Request, res: Response) {
  try {
    const item = await deleteItemById(req.params.id);
    if (!item) res.json({ message: "No item was found" });
    res.json(item);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

// Handler for updating an item by ID

export async function updateItemByIdHandler(req: Request, res: Response) {
  try {
    const item = await updateItemById(req.params.id, req.body);
    if (!item) res.json({ message: "No item was found" });
    res.json(item);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}
