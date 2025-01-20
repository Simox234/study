import { useState } from "react";

const specialites = [
    { id: 1, nomSpécialité: "generaliste" },
    { id: 2, nomSpécialité: "cardiologue" },
    { id: 3, nomSpécialité: "gastrologue" }
];

function Doctorform() {
    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mess, setMess] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [age, setAge] = useState(0);
    const handlerMessage = () => {
        setMess(`${name} ${prenom} ${specialite} ${age}`);
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent the default form submission
                    handlerMessage(); // Call the handler to update the message
                }}
            >
                <label>
                    Enter your name
                    <input
                        type="text"
                        value={name}
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Enter your prenom
                    <input
                        type="text"
                        value={prenom}
                        placeholder="Your Prenom"
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Enter your age
                    <input
                        type="number"
                        value={age}
                        placeholder="Your Age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Enter your specialite
                    <select
                        value={specialite}
                        onChange={(e) => setSpecialite(e.target.value)}
                    >
                        <option>--Select Speciality--</option>
                        {specialites.map((specialite) => (
                            <option
                                key={specialite.id}
                                value={specialite.nomSpécialité}
                            >
                                {specialite.nomSpécialité}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            {/* Display the message */}
            <h1>{mess}</h1>
        </>
    );
}

export default Doctorform;
