import React from "react";

const Contact = ()=>{
    const Email=()=>{
        window.location.href ='mailto:EFM@gmail.com';

    };

return(
    <>
      <div>
        <h2>Contact</h2>
        <button onClick={Email}>envoyer</button>
        </div>  


    </>
)
}
export default Contact