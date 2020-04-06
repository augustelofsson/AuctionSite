import React, { useState, useContext } from 'react';
import { LoginContext } from '../contexts/loginContext';

const Login = () => {
    const [inputUsername, setInputUsername] = useState('');

    const context = useContext(LoginContext);

    const logOut = () => {
        setInputUsername('');
        context.handleLogout();
    }

    return (
        <div className='ml-auto'>
            {context.username === '' && (
                <>
                    <input id="loginInput" type='text' placeholder='Användare' onChange={(e) => setInputUsername(e.currentTarget.value)} />
                    <button id="btnlogin" onClick={() => context.handleLogin(inputUsername)}>Logga in</button>
                </>
            )}

            {context.username !== '' && (
                <>
                    <span id="user">{context.username}</span>
                    <button id="btnlogin" onClick={() => logOut()}>logga ut</button>
                </>
            )}
        </div>
    )
}

export default Login;
