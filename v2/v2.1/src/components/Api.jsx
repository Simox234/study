import React from "react";
import { useState, useEffect } from "react";


const API = () => {

    const [docteurs, setDocteurs] = useState([]);



    useEffect(() => {
        fetch('https://localhost:3500/docteurs')
            .then((response) => response.json())
            .then((data) => setDocteurs(data))
            .catch((error) => console.log("error du fetch", error));
    },
        []
    );


    return (
        <>
            <h1>Table du docteurs</h1>

            <table>
                <thead>
                    <tr>
                        <th>id:</th>
                        <th>Nom:</th>
                        <th>Prenom:</th>
                        <th>Service:</th>
                    </tr>
                </thead>
                <tbody>
                    {docteurs.map((docteur) => {
                        <tr key={docteur.id}>
                            <td>{docteur.id}</td>
                            <td>{docteur.nom}</td>
                            <td>{docteur.prenom}</td>
                            <td>{docteur.service}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )

}
export default API


