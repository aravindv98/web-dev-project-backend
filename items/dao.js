import userModel from "../users/model.js";
import itemModel from "./model.js";
export const createItem = (item) => itemModel.create(item);
export const findAllItems = () => itemModel.find();
export const findItemById = (itemId) => itemModel.findById(itemId);
export const updateItem = (itemId, item) =>
    itemModel.updateOne({ _id: itemId }, { $set: item });

export const findItemByUser = (user) => itemModel.find({ seller: user });

export const deleteItem = (itemId) => itemModel.deleteOne({ _id: itemId });