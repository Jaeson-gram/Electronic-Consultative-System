import chatModel from "../models/chatModel.js";

//  ---   API ENDPOINTS ---
//creatChat
//findUserChats
//findChat

export const createChat = async(request, response) => {
    const {firstID, secondID} = request.body;

    try {
        //if we already have a chat..
        const chat = await chatModel.findOne({
            members: {$all: [firstID, secondID]},
        })
        
        if (chat) {
            return response.status(200).json(chat);
        }

        //otherwise..
        const newChat = chatModel({
            members: [firstID, secondID]
        })

        const res = await newChat.save();

        response.status(200).json(res);

    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}


export const findUserChats = async(request, response) => {
    const userID = request.params.userID;

    try {

        const chats = await chatModel.find({
            members: {$in: [userID]}
        })

        response.status(200).json(chats);
        
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}


export const findChat = async(request, response) => {
    const {firstID, secondID} = request.params;

    try {

        const chat = await chatModel.findOne({
            members: {$all: [firstID, secondID]}
        })

        response.status(200).json(chat);
        
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
    }
}
