import { useContext, useEffect } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient.js";
import { Stack } from "react-bootstrap";
import profilePic  from "../../assets/profile.svg";
import { ChatContext } from "../../context/chatContext.jsx";


const UserChat = ({chat, user}) =>{
    const {recipientUser} = useFetchRecipientUser(chat, user);
    const { onlineUsers } = useContext(ChatContext);

    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);


    return (
        <Stack direction="horizontal" gap={3} className="user-card align-items-cen p-2 juatify-content-between" role="button">
            <div className="d-flex">
                <div className="me-2">
                    <img src={profilePic} height="45px" />
                </div>

                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">Hi, this is our first chat so..</div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-end">
                <div className="date">22-08-2024</div>
                <div className="this-user-notifications">2</div>
                <span className={isOnline ? "user-online" : ""}></span>
            </div>
        </Stack>
    );
}

export default UserChat;