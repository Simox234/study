import React from "react";
import { useState,useEffect } from "react";

const Livres=()=>{
    const [livres,setLivres]=useState([]);

    useEffect(()=>{
        fetch(`http://books.cloudfoundrv.com/data/books/`)
        .then((reponse)=>reponse.json())
        .then((data)=>setLivres(data))
        .catch((error)=>console.log('error du fetch',error))


    },
[]
);


return(<>
    
    <h1>Livres</h1>
    {livres.map((livre)=>{
        <ul>
            <li key={livre.isbn}>
                <img src={livre.image} alt={livre.title} />
                <h2>{livre.title}</h2>
                <h3>Prix : {livre.price}</h3>
            </li>
        </ul>
    })}
    
    </>)
}
export default Livres