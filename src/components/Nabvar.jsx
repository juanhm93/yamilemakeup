import React from 'react';
// import {Link} from 'react-router-dom';
import {Link, animateScroll as Scroll } from "react-scroll";

class Navbar extends React.Component {
    render(){
        return(
            <nav>
                     <ul>
                         <li className="active">
                            <Link className="active" to="/">bio</Link>
                        </li>
                         <li>
                            <Link to="#portafolio">portafolio</Link>
                        </li>
                         <li>
                             <Link to="#">cursos</Link>
                        </li>
                         <li>
                             <Link to="#">tienda</Link>
                        </li>
                         <li>
                             <Link to="#">contacto</Link>
                        </li>
                     </ul>
            </nav>
        )
    }
}

export default Navbar;