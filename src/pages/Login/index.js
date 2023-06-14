import React, { useContext } from 'react';
import AuthContext from '~/context/AuthContext';

function Login() {
    const { loginUser } = useContext(AuthContext);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
