import React, { useState } from 'react';
import Banner from '../components/banner';
import CardCollaborateur from '../components/cardCollaborateur';
import styles from '../css/randomCollab.module.css';
import * as Collaborateurs from '../services/collaborateur';
import { useEffect } from 'react';

const randomcollab = () => {

    const [collaborateurs, setCollaborateurs] = useState(null);

    useEffect(() => {
        randomcollab();
    }, []);

    const randomcollab = () =>{
        Collaborateurs.getRandomCollaborateurs().then(list => {
            setCollaborateurs(list);
        })
    }

    return (
        <>
          <Banner />
          <div className={styles.page}>
            <h1 className={styles.text}>Bienvenue sur l'intranet</h1>
            <h4 className={styles.text}>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</h4>
            <button className={`${styles.button}`} onClick={randomcollab}>Dire bonjour à quelqu'un d'autre</button>
          </div>
          
            {collaborateurs && 
                <CardCollaborateur collaborateur={collaborateurs}/>
            }
        </>
    );
};

export default randomcollab;