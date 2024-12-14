// import React from 'react'
// import useAuth from '../hooks/useAuth'
// import { Navigate } from 'react-router-dom';

// const PublicRoute = ({ children }) => {

//     const isLoggedIn = useAuth();
//     return !isLoggedIn ? children : <Navigate to="/dashboard" />
// }

// export default PublicRoute

import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    const location = useLocation();

    const alwaysAccessibleRoutes = ["/", "/product", "/product/:id"];

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
