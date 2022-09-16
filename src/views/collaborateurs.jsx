import React from 'react';
import CardCollaborateur from '../components/cardCollaborateur';
import Banner from '../components/banner';
import styles from '../css/collaborateur.module.css';
import * as Collaborateurs from '../services/collaborateur';
import * as Utils from '../services/utils/utils';
import { useEffect } from 'react';
import { useState } from 'react';

const collaborateurs = () => {

    const [collaborateurs, setCollaborateurs] = useState(null);
    const [filtre, setFiltre] = useState({firstname:'',city:'',service:''});
    const [resultFiltre, setResultFiltre] = useState([]);

    useEffect(() => {
        Collaborateurs.getCollaborateurs().then(list => {
            setCollaborateurs(list);
            setResultFiltre(list.reverse());
        })
    }, []);

    const handleFilter = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        setFiltre({...filtre, [name]: value});
        const {firstname, city, service} = {...filtre, [name]: value};

        const liste = collaborateurs.filter(collaborateur => Utils.containFirstname(collaborateur,firstname) && Utils.containCity(collaborateur, city) && Utils.containService(collaborateur,service));
        setResultFiltre(liste); 
    }

    return (
        <>
            <Banner />
            
            <div className={styles.container}>
                <form className={styles.filtre}>
                    <input className={`form-control ${styles.filtre_input}`} name='firstname' placeholder='Nom' type="text" onChange={handleFilter}/>
                    <input className={`form-control ${styles.filtre_input}`} name='city' placeholder='Ville' type="text" onChange={handleFilter}/>
                    <select className={`form-control ${styles.filtre_input}`} name="service" id="service" onChange={handleFilter}>
                        <option>select a service</option>
                        <option>Marketing</option>
                        <option>Technique</option>
                        <option>Client</option>
                    </select>
                </form>
                <div className={`row`}>
                    {resultFiltre && resultFiltre.map((collaborateur) => (
                        <CardCollaborateur key={collaborateur.id} collaborateur={collaborateur}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default collaborateurs;