import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
        from: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
        to: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    },
    { collection: "follows" });
export default followSchema;

