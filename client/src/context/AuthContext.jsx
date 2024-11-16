import { createContext, useCallback, useEffect, useState } from "react";
import { baseURL, postReq } from "../utilities/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    // Registration requirements
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const registerUser = useCallback(async (event) => {
        event.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const response = await postReq(`${baseURL}/users/register`, JSON.stringify(registerInfo));

        setIsRegisterLoading(false);

        if (response.error) {
            return setRegisterError(response);
        }

        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [registerInfo]);




    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("User");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); // Ensure the useEffect only runs on component mount




    // Login requirements
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });




    const loginUser = useCallback(async (event) => {
        event.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        const response = await postReq(`${baseURL}/users/login`, JSON.stringify(loginInfo));
        setIsLoginLoading(false);

        if (response.error) {
            return setLoginError(response);
        }

        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [loginInfo]);




    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);




    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            isRegisterLoading,
            registerInfo,
            updateRegisterInfo,
            registerError,
            loginUser,
            isLoginLoading,
            loginInfo,
            updateLoginInfo,
            loginError,
            logoutUser,
            children,
        }}>
            {children}
        </AuthContext.Provider>
    );
}
