import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import styles from '../css/banner.module.css';
import * as Storage from '../services/storage';

function banner() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const logout = () =>{
        Storage.clearTokenStorage();
        navigate('/');
    }
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/randomCollab" className={styles.titre}>Intranet</Link>
            </h1>
            {
                user.user &&
                <>
                    <h2 className={styles.name}>{user.user.user.firstname} {user.user.user.lastname}</h2>
                    <div className={styles.banner_right}>
                        {
                            user.user.user.isAdmin && 
                            <>
                                <Link to="/addCollab" className={styles.text}>Ajouter + </Link>
                                <p className={styles.text}>|</p>
                            </>
                        }
                        <Link to="/collaborateurs" className={`${styles.text} ${styles.button}`}>Collaborateurs</Link>
                        <Link to="/updateUser" className={`${styles.text} ${styles.button}`}><img src={user.user.user.photo} className={styles.img}/></Link>
                        <button className={`${styles.logout} ${styles.button}`} onClick={logout}><ion-icon onClick={logout} name="log-out-outline"></ion-icon></button>
                        
                    </div>
                </>
            }
            
            
        </header>
    );
};

export default banner;