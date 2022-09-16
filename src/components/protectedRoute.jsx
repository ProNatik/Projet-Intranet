import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Storage from '../services/storage';

const protectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = Storage.getTokenStorage();
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (!token) {
            return navigate('/');
        } 
        setIsConnected(true);
    }, []);
    if (!isConnected) return;
    return children;
};

export default protectedRoute;