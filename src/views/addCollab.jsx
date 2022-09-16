import React from 'react';
import { useState } from 'react';
import Banner from '../components/banner';
import styles from '../css/formCollab.module.css';
import * as Collaborateurs from '../services/collaborateur';

const addCollab = () => {
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
            photo:'',
            password:''
        }
    );


    const handleFilter = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        setValues({...values, [name]: value});
    }

    const addCollab = (e) =>{
        e.preventDefault();
        Collaborateurs.postCollaborateurs(values);
        alert('Collaborateur ajouté');
    }

    return (
        <>
            <Banner />
            <div>

            </div>
            <form className={`${styles.container}`}>
                <select className={`form-control ${styles.input}`} name='gender' id='gender' onChange={handleFilter}>
                    <option>gender</option>
                    <option>male</option>
                    <option>female</option>
                </select>
                <input className={`form-control ${styles.input}`} name='firstname' placeholder='Firstname' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='lastname' placeholder='Lastname' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='city' placeholder='City' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='country' placeholder='Country' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='email' placeholder='Email' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='phone' placeholder='Phone' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='birthdate' placeholder='Birthdate' type="date" onChange={handleFilter}/>
                <select className={`form-control ${styles.input}`} name="service" id="service" onChange={handleFilter}>
                    <option>select a service</option>
                    <option>Marketing</option>
                    <option>Technique</option>
                    <option>Client</option>
                </select>
                <input className={`form-control ${styles.input}`} name='photo' placeholder='Photo(url)' type="text" onChange={handleFilter}/>
                <input className={`form-control ${styles.input}`} name='password' placeholder='Password' type="password" onChange={handleFilter}/>
                <button className={`${styles.button}`} onClick={addCollab}>Add</button>
            </form>
        </>
    );
};

export default addCollab;