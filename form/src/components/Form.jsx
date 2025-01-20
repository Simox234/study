import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pays, setPays] = useState([]);
  const [selectedPay, setSelectedPay] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries ${cin}")
      .then((response) => response.json())
      .then((data) => setPays(data.data.map((country) => country.country)))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log({ email, password, selectedPay, frequency });
  };

  return (
    <>
      <h1>Recevoir notre newsletter</h1>
      <form onSubmit={submit}>
        <label style={{fontSize:'20px',backgroundColor:'blue'}}>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Entrez votre email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            placeholder="Entrez votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Pays:
          <select
            onChange={(e) => setSelectedPay(e.target.value)}
            value={selectedPay}
          >
            <option value="">----Select your country----</option>
            {pays.map((pay, index) => (
              <option value={pay} key={index}>
                {pay}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Fréquence:
          <input
            type="radio"
            name="frequency"
            value="Hebdomadaire"
            onChange={(e) => setFrequency(e.target.value)}
          />
          Hebdomadaire
        </label>
        <label>
          <input
            type="radio"
            name="frequency"
            value="Mensuel"
            onChange={(e) => setFrequency(e.target.value)}
          />
          Mensuel
        </label>
        <br />
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default Form;
