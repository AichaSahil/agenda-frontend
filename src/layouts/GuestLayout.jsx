import {Navigate, Outlet } from 'react-router-dom';
import {useAuthContext} from '../context/AuthContext'

export const GuestLayout = () => {
    const {user}= useAuthContext();

    return user ? <Outlet /> : <Navigate to="/dashboard" />
    
}


