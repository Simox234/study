import Container from "./componantstylise";
import { useState, useEffect } from "react";


const ClubMembers = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://apitest/adherents')
            .then((reponse) => reponse.json())
            .then((data) => setMembers(data))
            .catch((error) => console.log('error du fetch :', error));


    },
        []
    );

    return (<>
        <Container>
            <h1>liste</h1>

            <ul>
                {members.map((member) => (
                    <li key={member.cin}>{member.cin}-{member.nom}</li>
                ))}
            </ul>
        </Container>

    </>);
}
export default ClubMembers