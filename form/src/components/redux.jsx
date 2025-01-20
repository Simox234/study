//des actions... add and delete

export const add_medcin = (medecin) => {
    return {
        type: 'ADD_MEDECIN',
        payload: medecin,
    };


};
export const delete_medecin = (id) => {
    return {
        type: 'DELETE_MEDECIN',
        payload: id,

    }

}

//Reducers.js

const initState = {
    medecins: [
        { id: 10, nom: "CHARAFI", prenom: "ALI", spécialité: "gastrologue" },
        { id: 11, nom: "CHARAFI", prenom: "ALI", spécialité: "gastrologue" },
    ],
};

const ReducerMedecin = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MEDECIN':
            return {
                ...state,
                medecins: [...state.medecins, action.payload],
            };
        case 'DELETE_MEDECIN':
            return {
                ...state,
                medecins: state.medecins.filter((medecin) => medecin.id !== action.payload)
            };
        default:
            return state;

    }
}
export default ReducerMedecin;


//index js creation

import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import ReducerMedecin from './reducers';

const store = createStore(ReducerMedecin);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={store}>

        <App />
    </Provider>


);

//list something est afficher a partir du store
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_medecin } from './actions';

const ListMedecins = () => {
    const dispatch = useDispatch();
    const medecins = useSelector((state) => state.medecins);

    const handlerDelete = (id) => {
        dispatch(delete_medecin(id));
    };

    return (
        <div>
            <h2>Liste des Medecins</h2>
            <ul>
                {medecins.map((medecin) => (

                    <li key={medecin.id}>
                        {medecin.nom} {medecin.prenom} {medecin.spécialité}
                        <button onClick={() => handlerDelete(medecin.id)}>supprimer</button>
                    </li>
                )
                )}
            </ul>
        </div>
    );
}
export default ListMedecins;

//add 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_medcin } from './actions';


const AddMedecin = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [spécialité, setSpécialité] = useState('');
    const dispatch = useDispatch();
    
    
    const handlerAdd = () => {
        if (!nom || !prenom || !spécialité) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        const newMedecin = {
            id: Date.now(),
            nom,
            prenom,
            spécialité,

        };
        dispatch(add_medcin(newMedecin));
        setNom('');
        setPrenom('');
        setSpécialité('');

    };
    return (<div>
        <h2>Ajouter un Médecin</h2>
        <input
            type=""
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
        />
        <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
        />
        <input
            type="text"
            placeholder="Spécialité"
            value={spécialité}
            onChange={(e) => setSpécialité(e.target.value)}
        />
        <button onClick={handlerAdd}>Ajouter</button>
    </div>
    );


}
export default AddMedecin;

//
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_medcin } from './actions';

const AddMedecin = () => {
    // State for text inputs
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [spécialité, setSpécialité] = useState('');

    // State for password input
    const [password, setPassword] = useState('');

    // State for date input
    const [dateOfBirth, setDateOfBirth] = useState('');

    // State for email input
    const [email, setEmail] = useState('');

    // State for checkbox input
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    // State for textarea input
    const [notes, setNotes] = useState('');

    const dispatch = useDispatch();

    const handlerAdd = () => {
        if (!nom || !prenom || !spécialité || !password || !dateOfBirth || !email || !agreeToTerms) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const newMedecin = {
            id: Date.now(),
            nom,
            prenom,
            spécialité,
            password,
            dateOfBirth,
            email,
            agreeToTerms,
            notes,
        };

        dispatch(add_medcin(newMedecin));

        // Reset all states
        setNom('');
        setPrenom('');
        setSpécialité('');
        setPassword('');
        setDateOfBirth('');
        setEmail('');
        setAgreeToTerms(false);
        setNotes('');
    };

    return (
        <div>
            <h2>Ajouter un Médecin</h2>

            {/* Text Inputs */}
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
            />
            <input
                type="text"
                placeholder="Spécialité"
                value={spécialité}
                onChange={(e) => setSpécialité(e.target.value)}
            />

            {/* Password Input */}
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* Date Input */}
            <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Checkbox Input */}
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                    J'accepte les termes et conditions
                </label>
            </div>

            {/* Textarea Input */}
            <textarea
                placeholder="Notes supplémentaires"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>

            <button onClick={handlerAdd}>Ajouter</button>
        </div>
    );
};

export default AddMedecin;