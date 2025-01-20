import React, { useState } from "react";



const Calculer=()=>{
    const [poids,setPoids]=useState("");
    const [taille,setTaille]=useState("");
    const [bmi,setBmi]=useState(null);
    const [status,setStatus]=useState("");
    const [color,setColor]=useState("");



    const handlerSubmit=()=>{
        if(!poids || !taille){
            alert("Entrer votre poids et taille");
            return;
        }
        const BMI=poids*10000/(taille*taille);
        setBmi(BMI.toFixed(2));
        if(BMI>19 && BMI<25){
            setStatus("normale");
            setColor("green");
        }else if(BMI>25){
            setStatus("dangereux");
            setColor("orange");
        }else{
            setStatus("dangereux");
            setColor("red");
        }
    };

    return(
        <>
        <h1>Body mass index</h1>
        <label>Poids en kg
        <input 
        type="number"
        placeholder="enter your poids"
        value={poids}
        onChange={(e)=>setPoids(e.target.value)} 
        />
        </label>
        
        <label>Taille en centimetre
        <input 
        type="number"
        placeholder="enter your taille"
        value={taille}
        onChange={(e)=>setTaille(e.target.value)} 
        />
        </label>
        <button onClick={handlerSubmit}>Calculer</button>
        {bmi &&(
        <h3 style={{color:color}}>BMI: {bmi} - {status}</h3>
         )}
        </>
    )


}
export default Calculer