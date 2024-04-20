import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
        name: { type: String, required: true},
        description:String,
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
        price: { type: Number, required: true},
        images: { type:[String], default: undefined}
    },
    { collection: "items" });
export default itemSchema;

