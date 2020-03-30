import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext();

const LoginContextProvider = (props) => {
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setUsername(username);
    }

    const handleLogout = () => {
        setUsername('');
    }

    useEffect(() => {

    }, [username])

    return <LoginContext.Provider value={{ username, handleLogin, handleLogout }}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContextProvider;
