import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
        content: { type: String, required: true},
        poster: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'items'},
    },
    { collection: "comments" });
export default commentSchema;

