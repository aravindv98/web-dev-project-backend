import mongoose from "mongoose";
import itemSchema from "./schema.js";
const itemModel = mongoose.model("items", itemSchema);
export default itemModel;