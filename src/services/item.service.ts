import { itemDocument, UserInput } from "../interface/item.interface";
import itemModel from "../models/items.model";

export async function createItem(userInput: UserInput): Promise<itemDocument> {
  const newItem = await itemModel.create(userInput);
  return newItem;
}

export async function getItems(): Promise<Object> {
  const items = await itemModel.find({});
  if (!items) return false;
  return items;
}

export async function getItemById(id: string) {
  const item = await itemModel.findById(id);
  if (!item) return false;
  return item;
}

export async function deleteItemById(id: string) {
  const item = await itemModel.findByIdAndDelete(id);
  if (!item) return false;
  return item;
}

export async function updateItemById(id: string, userInput: UserInput) {
  const newData = userInput;
  const options = { new: true };
  const item = await itemModel.findByIdAndUpdate(id, newData, options);
  if (!item) return false;
  return item;
}
