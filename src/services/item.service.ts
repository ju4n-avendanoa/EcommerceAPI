import { itemDocument, UserInput } from "../interface/item.interface";
import itemModel from "../models/items.model";

/**
 * Creates a new item in the database with the provided user input
 * @param userInput - The user input to create the item
 * @returns The created item document
 */
export async function createItem(userInput: UserInput): Promise<itemDocument> {
  const newItem = await itemModel.create(userInput);
  return newItem;
}

/**
 * Retrieves all items from the database
 * @returns An array of items
 */
export async function getItems(): Promise<Object> {
  const items = await itemModel.find({});
  if (!items) return false;
  return items;
}

/**
 * Retrieves an item from the database by its ID
 * @param id - The ID of the item to retrieve
 * @returns The retrieved item document
 */
export async function getItemById(id: string) {
  const item = await itemModel.findById(id);
  if (!item) return false;
  return item;
}

/**
 * Deletes an item from the database by its ID
 * @param id - The ID of the item to delete
 * @returns The deleted item document
 */
export async function deleteItemById(id: string) {
  const item = await itemModel.findByIdAndDelete(id);
  if (!item) return false;
  return item;
}

/**
 * Updates an item in the database by its ID with the provided user input
 * @param id - The ID of the item to update
 * @param userInput - The user input to update the item
 * @returns The updated item document
 */
export async function updateItemById(id: string, userInput: UserInput) {
  const newData = userInput;
  const options = { new: true };
  const item = await itemModel.findByIdAndUpdate(id, newData, options);
  if (!item) return false;
  return item;
}
