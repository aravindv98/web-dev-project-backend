import mongoose from "mongoose";
import followSchema from "./schema.js";

const followModel = mongoose.model("follows", followSchema);
export default followModel;