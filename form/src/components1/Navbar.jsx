import {Link} from 'react-router-dom';
function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Doctorform">Doctor Form</Link></li>
                </ul>
            </nav>
        </>
    );
}
export default Nav