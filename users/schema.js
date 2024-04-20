import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: String,
        avatar: {type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
        address: String,
        phone: String,
        profileName: String,
        dob: Date,
        role: {
            type: String,
            enum: ["BUYER", "SELLER", "ADMIN"],
            default: "BUYER" },
        cart: [{type: mongoose.Schema.Types.ObjectId, ref: "items"}],
    },
    { collection: "users" });
export default userSchema;

