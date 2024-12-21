import React from 'react'
import { Link } from 'react-router-dom'
import { userLoggedOut } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('auth');
        dispatch(userLoggedOut());
    }

    return (
        <Link onClick={handleLogout}>Logout</Link>
    )
}

export default Logout