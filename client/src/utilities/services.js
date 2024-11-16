export const baseURL = "http://localhost:3001/api";

export const postReq = async(url, body) => {

    const response = await fetch(url, 
        {
            method: "POST",
            headers: 
            {
                "Content-Type" : "application/json",
            },

            body,
        });

        const data = await response.json();

        if (!response.ok) {
            let message;

            if (data?.message) {
                message = data.message;
            }
            else{
                message = data;
            }

            return {error: true, message}
        }

        return data;
}

export const getReq = async(url) =>{

    const response = await fetch(url);
    const data = await response.json();

    if(!response.ok){
        let message = "oops, we encountered an error..";

        if(data?.message){
            message = data.message;
        }

        return {error: true, message}
    }

    return data;
}