import React, { useContext } from 'react';
import AuthContext from '~/context/AuthContext';

function Logout() {
    const { logoutUser } = useContext(AuthContext);

    return (
        <div>
            <button onClick={logoutUser}>Log out</button>
        </div>
    );
}

export default Logout;
