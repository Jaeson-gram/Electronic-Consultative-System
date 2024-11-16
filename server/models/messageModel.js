import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    chatID: String,
    senderID: String,
    text: String
}, 
{
    timestamps: true
})

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;