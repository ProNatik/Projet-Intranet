import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../css/cardCollaborateur.module.css';
import Swal from 'sweetalert2';
import * as Collaborateurs from '../services/collaborateur';

const cardCollaborateur = ({collaborateur}) => {
    const user = useSelector(state => state.user);
    const id = collaborateur.id;

    const onDelete =()=>{
          Swal.fire({
            title: 'Veux-tu supprimer ce collaborateur ?',
            showCancelButton: true,
            cancelButtonText: 'Non',
            confirmButtonText: 'Oui',
          }).then((result) => {
            if (result.isConfirmed) {
              Collaborateurs.deleteCollaborateurs(id);
              Swal.fire('Collaborateur supprimé', '', 'success');
            };
          })
        }
        

    return (
        <>
            {
                collaborateur && 
                <div className={`col-10 mx-auto col-sm-4 col-lg-4 ${styles.container_card}`}>
                    <img src={collaborateur.photo} className={styles.photo} alt={collaborateur.firstname}/>
                    <div className={styles.description}>
                        <p className={styles.p}>{collaborateur.firstname}  {collaborateur.lastname}</p>
                        <p className={styles.p}>{collaborateur.city}, {collaborateur.country}</p>
                        <p className={styles.p}>{collaborateur.email}</p>
                        <p className={styles.p}>{collaborateur.phone}</p>
                        {user.user.user.isAdmin && 
                        <div className={styles.buttons}>
                            <Link to={`/updateSelectUser/${id}`}><button className={`btn btn-secondary btn-sm ${styles.button}`}>Editer</button></Link>
                            <button onClick={onDelete} className={`btn btn-danger btn-sm ${styles.button}`}>Supprimer</button>
                        </div>
                        }
                    </div>
                </div>
            }
        </>
        
    );
};

export default cardCollaborateur;