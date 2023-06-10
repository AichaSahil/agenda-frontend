// import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import {useAuthContext} from '../context/AuthContext'


export const AuthLayout = () => {
    const {user}= useAuthContext();

    return user ? <Outlet /> : <Navigate to="/connexion" />
 
}