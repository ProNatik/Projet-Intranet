import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Banner from '../components/banner';
import styles from '../css/formCollab.module.css';
import * as Collaborateurs from '../services/collaborateur';

const updateUser = () => {
    const user = useSelector(state => state.user);
    const id =user?.user.user.id;
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
            setValues(user.user.user);
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
            <form className={`${styles.container}`}>
                <select className={`form-control ${styles.input}`} name='gender' id='gender' onChange={handleFilter}>
                    <option>gender</option>
                    <option>male</option>
                    <option>female</option>
                </select>
                <input className={`form-control ${styles.input}`} name='firstname' placeholder='Firstname' type="text" onChange={handleFilter} value={values.firstname}/>
                <input className={`form-control ${styles.input}`} name='lastname' placeholder='Lastname' type="text" onChange={handleFilter} value={values.lastname}/>
                <input className={`form-control ${styles.input}`} name='city' placeholder='City' type="text" onChange={handleFilter} value={values.city}/>
                <input className={`form-control ${styles.input}`} name='country' placeholder='Country' type="text" onChange={handleFilter} value={values.country}/>
                <input className={`form-control ${styles.input}`} name='email' placeholder='Email' type="text" onChange={handleFilter} value={values.email}/>
                <input className={`form-control ${styles.input}`} name='phone' placeholder='Phone' type="text" onChange={handleFilter} value={values.phone}/>
                <input className={`form-control ${styles.input}`} name='birthdate' placeholder='Birthdate' type="date" onChange={handleFilter} value={values.birthdate}/>
                <label htmlFor="service"></label>
                <select className={`form-control ${styles.input}`} name="service" id="service" onChange={handleFilter} value={values.service}>
                    <option>select a service</option>
                    <option>Marketing</option>
                    <option>Technique</option>
                    <option>Client</option>
                </select>
                <input className={`form-control ${styles.input}`} name='photo' placeholder='Photo' type="text" onChange={handleFilter} value={values.photo}/>
                <button className={`${styles.button}`} onClick={updateCollab}>Add</button>
            </form>
        </>
    );
};

export default updateUser;