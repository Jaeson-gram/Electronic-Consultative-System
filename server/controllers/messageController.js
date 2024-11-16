import messageModel from "../models/messageModel.js" 

// ... API ENDPOINTS ...
//create Message
//getMessages

export const createMessage = async (request, response) => {
    //fetch the needed parameters from the user's message body
    const {chatID, senderID, text} = request.body;

    //create a message of it using the message model as a template and filling what we get from the user
    const message = new messageModel({
        chatID, senderID, text
    })


    try {
        //save the details and send it to the frontend
        const res = await message.save();
        response.status(200).json(res);

    } catch (error) {
        //in the case that there's error
        console.log(error);
        response.status(500).json(error);
    }
}

export const getMessages = async (request, response) => {
    //to get the messages of a particular chat, we get the chat id from params
    const {chatID} = request.params;

    try {
        //find the chat from the model
        const messages = await messageModel.find({chatID});
        
        //send the messages to front end
        response.status(200).json(messages);
        
    } catch (error) {
        //in the case that there're any errors
        console.log(error);
        response.status(500).json(error);
    }
}


