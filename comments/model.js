import mongoose from "mongoose";
import commentSchema from "./schema.js";
const commentModel = mongoose.model("comments", commentSchema);
export default commentModel;