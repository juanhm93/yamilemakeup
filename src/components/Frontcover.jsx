import React from 'react';
import './styles/Frontcover.css';
import facebook from '../assets/static/facebook.svg';
import instagram from '../assets/static/instagram.svg';
import youtube from '../assets/static/youtube.svg';
// import imgFondoYamile from '../assets/static/Grupo\ 4.png';

// let sectionBackground = {
//     width: "100%",
//     backgroundImage: `url(${imgFondoYamile})`

// }; 

const Frontcover = () => (
    <section  id="portada" className="front-cover">
    <div className="front-cover-container">
        <h1>yamileth panduani</h1>
        <article className="front-cover-description">
            <p>Vive la experiencia del maquillaje y la estetica facial profesional <br /> para ocaciones memorables dignas de recordar, resaltando tu <br /> belleza como nunca antes</p>
        </article>
        <article className="front-cover-social-networks">
            <ul>
                <li><a  className="networks" href="https://www.facebook.com/Yamilemakeup/" target="_blank"><img src={facebook} alt="" /> <p>facebook.com/yamilemakeup</p></a></li>
                <li><a className="networks" href="https://www.instagram.com/yamilemakeup/?igshid=elzox8dm8nf4" target="_blank"><img src={instagram} alt="" /><p>@yamilemakeup</p> </a></li>
                <li><a className="networks" href="https://www.youtube.com/channel/UCk0pDqKt8hNJmb0Rpa8r_6g" target="_blank"> <img src={youtube} alt="" /><p>Yamile Makeup</p> </a></li>
            </ul>
        </article>
    </div>
    <div className="front-cover-img">
    
    </div>
</section>

);

export default Frontcover;