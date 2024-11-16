import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
    email: {type: String, required: true, unique: true}
}, {timestamps: true,}
);

const userModel = mongoose.model("User", userSchema);

export default userModel;