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
        Collaborateurs.postCollaborateurs(values).catch(error => error.response );
        alert('Collaborateur ajouté');
    }

    return (
        <>
            <Banner />
            <div>

            </div>
            <form className={`${styles.container}`}>
                <label className={`${styles.label}`} htmlFor="">Gender</label>
                <select className={`form-control ${styles.input}`} name='gender' id='gender' onChange={handleFilter}>
                    <option>gender</option>
                    <option>male</option>
                    <option>female</option>
                </select>
                <label className={`${styles.label}`} htmlFor="">Firstname</label>
                <input className={`form-control ${styles.input}`} name='firstname' placeholder='Firstname' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Lastname</label>
                <input className={`form-control ${styles.input}`} name='lastname' placeholder='Lastname' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">City</label>
                <input className={`form-control ${styles.input}`} name='city' placeholder='City' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Country</label>
                <input className={`form-control ${styles.input}`} name='country' placeholder='Country' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Email</label>
                <input className={`form-control ${styles.input}`} name='email' placeholder='Email' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Phone</label>
                <input className={`form-control ${styles.input}`} name='phone' placeholder='Phone' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Birthdate</label>
                <input className={`form-control ${styles.input}`} name='birthdate' placeholder='Birthdate' type="date" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Service</label>
                <select className={`form-control ${styles.input}`} name="service" id="service" onChange={handleFilter} >
                    <option>select a service</option>
                    <option>Marketing</option>
                    <option>Technique</option>
                    <option>Client</option>
                </select>
                <label className={`${styles.label}`} htmlFor="">Photo</label>
                <input className={`form-control ${styles.input}`} name='photo' placeholder='Photo' type="text" onChange={handleFilter}/>
                <label className={`${styles.label}`} htmlFor="">Password</label>
                <input className={`form-control ${styles.input}`} name='password' placeholder='Photo' type="password" onChange={handleFilter}/>
                <button className={`${styles.button}`} onClick={addCollab}>Add</button>
            </form>
        </>
    );
};

export default addCollab;