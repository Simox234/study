import React from "react";
import { useState } from "react";

const Formulaire =()=>{
    const [id,setId]=useState("");
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [select,setSelect]=useState("");
    const [message,setMessage]=useState("");

    const services=[
        {id:1,nomService:"urgence"},
        {id:2,nomService:"radiologie"},
        {id:3,nomService:"reanimation"}
    ]

    const handlerSubmit = (e)=>{
        e.preventDefault();
        setMessage(`Medecin ${nom.toUpperCase()} ${prenom} a pour sérvice ${select.toUpperCase()}`)
    }



    return (
        <>
        <h1>Gestion Docteurs</h1>
        <form>
            <label>ENTER YOUR ID
            <input 
            type="number" 
            value={id}
            placeholder="Enter your id"
            onChange={(e)=>setId(e.target.value)}
            />
            </label>

            <label>ENTER YOUR NAME
            <input 
            type="text" 
            value={nom}
            placeholder="Enter your name"
            onChange={(e)=>setNom(e.target.value)}
            />
            </label>

            <label>ENTER YOUR NICKNAME
            <input 
            type="text" 
            value={prenom}
            placeholder="Enter your Prename"
            onChange={(e)=>setPrenom(e.target.value)}
            />
            </label>

            <label>SELECT SERVICE
            <select
            value={select}
            onChange={(e)=>setSelect(e.target.value)}
            >
                <option value="">--Select the service--</option>
                {services.map((service)=>(
                    <option key={service.id} value={service.nomService}>
                        {service.nomService}
                    </option>
                ))}
            </select>
            </label>
            <button type="button" onClick={handlerSubmit}>Afficher</button>
        </form>
        <h3>informations Docteur</h3>
        <p>{message}</p>
        </>
    )
}

export default Formulaire