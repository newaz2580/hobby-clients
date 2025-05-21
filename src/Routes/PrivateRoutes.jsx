import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoutes = ({children}) => {
    const {user}=use(AuthContext)
    const location=useLocation()
    if(!user) return <Navigate state={location.pathname} to='/login'></Navigate>
    return (
        <div>
            {children}
        </div>
    )
}
export default PrivateRoutes;