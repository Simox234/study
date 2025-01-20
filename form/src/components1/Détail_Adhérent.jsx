import { useState,useEffect } from "react";

const Details=()=>{
    const [adherents,setAdherents]=useState([]);

    useEffect(() => {
        fetch(`http://apitest/adherents/${cin}`)
          .then((response) => response.json())
          .then((data) => setAdherents(data))
          .catch((error) => console.error('Erreur lors de la récupération des détails:', error));
      }, [cin]);

      if (!adherents) return <p>chargement en cours ...</p>
    return(
        <>
        <h2>Details</h2>
        <p>Cin :{adherents.cin}</p>
        <p>Nom :{adherents.nom}</p>
        
        
        </>
    );
}
export default Details