import React, { useState } from 'react';
import Banner from '../components/banner';
import CardCollaborateur from '../components/cardCollaborateur';
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
          <button onClick={randomcollab}>Random</button>
            {collaborateurs && 
                <CardCollaborateur collaborateur={collaborateurs}/>
            }
        </>
    );
};

export default randomcollab;