import { useEffect, useState } from "react";
import { baseURL, getReq } from "../utilities/services";

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    // Calculate recipientId
    const recipientId = chat?.members?.find((id) => id !== user?._id);

    useEffect(() => {
        // if (!recipientId) {
        //     setRecipientUser(null);
        //     setError(null);
        //     return;
        // }

        const getUser = async () => {
                const response = await getReq(`${baseURL}/users/find/${recipientId}`);  

                if (response.error) {
                    return setError(error)
                } 

                setRecipientUser(response);
            }

        getUser();
    }, [recipientId]); // Ensure dependencies include all necessary variables

    return { recipientUser };
};
