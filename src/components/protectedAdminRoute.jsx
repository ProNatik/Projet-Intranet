import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Storage from '../services/storage';

const protectedAdminRoute = ({ children }) => {
    const user = useSelector(state=> state.user);
    const navigate = useNavigate();
    const token = Storage.getTokenStorage();
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (user?.user?.user) {
            if (!token && !user.user.user.isAdmin) {
                return navigate('/');
            } 
        } else return navigate('/');
        setIsConnected(true);
    }, []);
    if (!isConnected) return;
    return children;
};

export default protectedAdminRoute;