

import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    const location = useLocation();

    const alwaysAccessibleRoutes = ["/", "/product", "/product/:id", "/checkout"];

    const isAccessible = alwaysAccessibleRoutes.some((path) => {
        const regex = new RegExp(`^${path.replace(":id", "\\d+")}$`);
        return regex.test(location.pathname);
    });


    if (isLoggedIn && !isAccessible) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default PublicRoute;
