import { createContext, useCallback, useEffect, useState } from "react";
import {baseURL, getReq, postReq} from "../utilities/services.js";
import {io} from "socket.io-client"
import { getMessages } from "../../../server/controllers/messageController.js";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    
    //chat requirements
    const [userChats, setUserChats] = useState(null)
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [isMessagesLoading, setIsMessagesLoading] = useState(false);
    const [messagesError, setMessagesError] = useState(null)
    const [sendTextMessageError, setSendTextMessageError] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState(null);

    console.log("online users", onlineUsers)

    useEffect(() =>{

        const getUsers = async () =>{
            const response = await getReq(`${baseURL}/users`);

            if(response.error){
                return response.status(500).json({error: 'Error fetching users'});
            }

            const pChats = response.filter((u) =>{
                let isChatCreated = false;

                if (user?._id === u._id) {
                    return false;
                }

                if (userChats) {
                    isChatCreated = userChats?.some((chat) =>{
                        return chat.members[0] === u._id || chat.members[1] === u._id;
                    });
                }

                return isChatCreated;
            });

            setPotentialChats(pChats);
        }

        getUsers();
    }, [userChats]);


    //init socket
    useEffect(() =>{
        const newSocket = io("http://localhost:8080");
        setSocket(newSocket);

        //cleanup func
        return () =>{
            newSocket.disconnect();
        }
    }, [user]);

    //add online users
    useEffect(() =>{
        if (socket === null) {
            return;
        }
        socket.emit("addNewUser", user?._id);
        socket.on("getOnlineUsers", (response) =>{
             setOnlineUsers(response)
        });

        return() => {
            socket.off("getOnlineUsers");
        };

    }, [socket]);



    //send messages
    useEffect(() =>{
        if (socket === null) {
            return;
        }

        const recipientId = currentChat?.members?.find((id) => id !== user?._id);
        
        socket.emit("sendMessage", {...newMessage, recipientId})
    
    }, [newMessage]);



    //recieve messages
    useEffect(() =>{
        if (socket === null) {
            return;
        }

        socket.on("getMessage", response =>{
            if (currentChat._id !== response.chatId) {
                return;
            }

            setMessages((prev) => [...prev, response])
        });

        return () =>{
            socket.off("getMessage")
        }
    
    }, [socket, currentChat]);




    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);
    
                const response = await getReq(`${baseURL}/chats/${user?._id}`);
    
                setIsUserChatsLoading(false);
    
                if (response.error) {
                    return setUserChatsError(response.error);
                }
    
                setUserChats(response);
                
                // Set the first chat as the current chat, if available
                if (response.length > 0) {
                    setCurrentChat(response[0]);
                }
            }
        };
        getUserChats();
    }, [user]);
    



    // useEffect(() =>{
    //     const getMessages = async()=>{

    //                     // Step 1: Check if currentChat is defined and has a valid _id
    //                     if (!currentChat?._id) {
    //                         console.warn('No currentChat or _id is undefined. Skipping fetch.');
    //                         return; // Skip fetching messages if no chat is selected
    //                     }

    //             setIsMessagesLoading(true);
    //             setMessagesError(null);

    //             const response = await getReq(`${baseURL}/messages/${currentChat._id}`)
            
    //             setIsMessagesLoading(false);

    //             // if(response.error){
    //             //     return setMessagesError(response);
    //             // }

    //                        // Step 3: Handle server errors
    //         // if (response.error) {
    //         //     console.error('Error fetching messages:', response.message);
    //         //     return setMessagesError(response); // Log the error and update state
    //         // }

    //         if (response.error) {
    //             console.error('Error fetching messages:', response); // Log the entire response object
    //             return setMessagesError(response);
    //         }
            

    //             setMessages(response);
    //     };
    //     getMessages();
    // }, [currentChat])    //the useEffect updates when this changes


    
    const updateCurrentChat = useCallback((chat) =>{
        setCurrentChat(chat)
    }, []);

    console.log("current chat", currentChat)



    useEffect(() => {
        const getMessages = async () => {

            setIsMessagesLoading(true);
            setMessagesError(null);
    
            // console.log(`Fetching messages for chat ID: ${currentChat._id}`); // Log the chat ID

            if (currentChat?._id) {
                const response = await getReq(`${baseURL}/messages/${currentChat?._id}`);

                setIsMessagesLoading(false);
    
                if (response.error) {
                    return setMessagesError(response);
                }
        
                setMessages(response);
            }

        };
    
        getMessages();
    }, [currentChat]);


    console.log("messages", messages)
    

    const sendTextMessage =  useCallback(async (textMessage, sender, currentChatId, setTextMessage) =>{
        if (!textMessage) {
            return console.log('erm.. you must type something..')
        }

        console.log("sender", sender);

        const response = await postReq(`${baseURL}/messages`, JSON.stringify({chatId: currentChatId, senderId: sender._id, text: textMessage}));

        if (response.error) {
            return setSendTextMessageError(response);
        }

        setNewMessage(response)

        setMessages((prev) => [...prev, response])
        setTextMessage("");
    }, [])




    const createChat = useCallback( async (firstId, secondId) =>{

        const response = await postReq(`${baseURL}/chats`, JSON.stringify({firstId, secondId}))

        if(response.error){
            return console.log('error creating chat', response);
        }

        setUserChats((prev) => [...prev, response]);

    }, [])

    return (<ChatContext.Provider value ={{

        userChats, 

        isUserChatsLoading, 

        userChatsError,

        potentialChats,

        createChat,

        updateCurrentChat,

        messages,


        setMessages,

        isMessagesLoading, 

        messagesError,
        
        currentChat,

        sendTextMessage,

        onlineUsers,


        


    }}>{children}</ChatContext.Provider>);

}