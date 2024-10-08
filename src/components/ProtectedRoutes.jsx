import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ isAuthenticated }) => {

    if (!isAuthenticated) {
        return <Navigate to={'/session-expired'} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes
