import React from 'react';
// import {Link} from 'react-router-dom';
import {Link } from "react-scroll";

class Navbar extends React.Component {
    render(){
        return(
            <nav>
                     <ul>
                         <li className="active">
                            <Link activeClass="active"  to="portada" spy={true} smooth={true} offset={-80} duration={500}>bio</Link>
                        </li>
                         <li>
                            <Link activeClass="active"  to="biografia" spy={true} smooth={true} offset={0} duration={500}>portafolio</Link>
                        </li>
                         <li>
                             <Link activeClass="active"  to="cursos" spy={true} smooth={true} offset={0} duration={500}>cursos</Link>
                        </li>
                         <li>
                             <Link activeClass="active"  to="tienda" spy={true} smooth={true} offset={0} duration={500}>tienda</Link>
                        </li>
                         <li>
                             <Link activeClass="active"  to="contacto" spy={true} smooth={true} offset={0} duration={500}>contacto</Link>
                        </li>
                     </ul>
            </nav>
        )
    }
}

export default Navbar;