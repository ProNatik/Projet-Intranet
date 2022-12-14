import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Banner from '../components/banner';
import styles from '../css/formCollab.module.css';
import * as Collaborateurs from '../services/collaborateur';

const updateSelectUser = () => {
    const user = useSelector(state => state.user);
    const params = useParams();
    const { id } = params;
    //const [collaborateur, setCollaborateur] = useState(null);

    const [values, setValues] = useState(
        {
            gender:'',
            firstname:'',
            lastname:'',
            city:'',
            country:'',
            email:'',
            birthdate:'',
            phone:'',
            service:'',
            photo:''
        }
    );
    useEffect(() => {
        Collaborateurs.getCollaborateurId(id).then(list => {
            setValues(list);
        });
    }, []);


    const handleFilter = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        setValues({...values, [name]: value});
    }

    const updateCollab = (e) =>{
        e.preventDefault();

        Collaborateurs.updateCollaborateurs(id,values);
        alert('Modifications validées');
    }

    return (
        <>
            <Banner />
            <div>

            </div>
            {values &&
            <form className={`${styles.container}`}>
                <label className={`${styles.label}`} htmlFor="">Gender</label>
                <select className={`form-control ${styles.input}`} name='gender' id='gender' onChange={handleFilter}>
                    <option>gender</option>
                    <option>male</option>
                    <option>female</option>
                </select>
                <label className={`${styles.label}`} htmlFor="">Firstname</label>
                <input className={`form-control ${styles.input}`} name='firstname' placeholder='Firstname' type="text" onChange={handleFilter} value={values.firstname}/>
                <label className={`${styles.label}`} htmlFor="">Lastname</label>
                <input className={`form-control ${styles.input}`} name='lastname' placeholder='Lastname' type="text" onChange={handleFilter} value={values.lastname}/>
                <label className={`${styles.label}`} htmlFor="">City</label>
                <input className={`form-control ${styles.input}`} name='city' placeholder='City' type="text" onChange={handleFilter} value={values.city}/>
                <label className={`${styles.label}`} htmlFor="">Country</label>
                <input className={`form-control ${styles.input}`} name='country' placeholder='Country' type="text" onChange={handleFilter} value={values.country}/>
                <label className={`${styles.label}`} htmlFor="">Email</label>
                <input className={`form-control ${styles.input}`} name='email' placeholder='Email' type="text" onChange={handleFilter} value={values.email}/>
                <label className={`${styles.label}`} htmlFor="">Phone</label>
                <input className={`form-control ${styles.input}`} name='phone' placeholder='Phone' type="text" onChange={handleFilter} value={values.phone}/>
                <label className={`${styles.label}`} htmlFor="">Birthdate</label>
                <input className={`form-control ${styles.input}`} name='birthdate' placeholder='Birthdate' type="date" onChange={handleFilter} value={values.birthdate}/>
                <label className={`${styles.label}`} htmlFor="">Service</label>
                <select className={`form-control ${styles.input}`} name="service" id="service" onChange={handleFilter} value={values.service}>
                    <option>select a service</option>
                    <option>Marketing</option>
                    <option>Technique</option>
                    <option>Client</option>
                </select>
                <label className={`${styles.label}`} htmlFor="">Photo</label>
                <input className={`form-control ${styles.input}`} name='photo' placeholder='Photo' type="text" onChange={handleFilter} value={values.photo}/>
                <button className={`${styles.button}`} onClick={updateCollab}>Add</button>
            </form>
            }
            
        </>
    );
};

export default updateSelectUser;