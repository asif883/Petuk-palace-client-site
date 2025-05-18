import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} =useAuth()
    const location = useLocation()

    if(loading){
        return <Loading/>
    }
    if(user) {
        {children}
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;