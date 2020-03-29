import React from 'react';
import LoginContext from '../contexts/loginContext';

const Login = () => {
    const [username, setUsername] = useState('');

    const context = useContext(LoginContext);

    return (
        <>
            {context.username !== '' && (
                <>
                    <input type='text' placeholder='användare' value={context.username} onChange={(e) => setUsername(e.currentTarget.value)} />
                    <button onClick={() => context.handleLogin(username)}>logga in</button>
                </>
            )}

            {context.username === '' && (
                <>
                    <button onClick={() => context.handleLogout}>logga ut</button>
                </>
            )}
        </>
    )
}

export default Login;
