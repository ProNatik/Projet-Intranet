import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../features/user/user-slice';
import { useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css';

import * as Collaborateurs from '../services/collaborateur';
import * as Storage from '../services/storage';

const login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) =>{
        event.preventDefault();
        Collaborateurs.login(email, password)
            .then(data => {
                dispatch(fetchLogin(data));
                Storage.setTokenStorage(data.token);
                navigate('/randomCollab');
            });
    }

    return (
        <>
            <div className={styles.container}>
                <h1>Se connecter</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <input className={`form-control ${styles.input}`} type="text" placeholder='Username' onChange={(e)=>setEmail(e.target.value)}/>
                        <input className={`form-control ${styles.input}`} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button className={`btn btn-info ${styles.button}`}>Connexion</button>
                </form>
            </div>
        </>
    );
};

export default login;