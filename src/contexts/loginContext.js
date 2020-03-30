import { useState } from "react";

const LoginContext = React.createContext();

export const AuctionContextProvider = (props) => {
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

export default LoginContext;
