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
                    <input type='text' placeholder='Användare' onChange={(e) => setInputUsername(e.currentTarget.value)} />
                    <button onClick={() => context.handleLogin(inputUsername)}>logga in</button>
                </>
            )}

            {context.username !== '' && (
                <>
                    <span>{context.username}</span>
                    <button onClick={() => logOut()}>logga ut</button>
                </>
            )}
        </div>
    )
}

export default Login;
