import React, { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setUsername(username);
    }

    const handleLogout = () => {
        setUsername('');
    }

    return <LoginContext.Provider value={{ username, handleLogin, handleLogout }}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContextProvider;
