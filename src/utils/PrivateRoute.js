import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '~/context/AuthContext';

function PrivateRouteWrapper({ children }) {
    const { user } = useContext(AuthContext);
    // console.log(useContext(AuthContext));
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRouteWrapper;
