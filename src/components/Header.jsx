import React from 'react';
import '../components/styles/Header.css';
import burguerMenu from  '../assets/static/Burger menu.svg';
import logoNegro from '../assets/static/logo negro Yamile.png';
import Navbar from './Nabvar';

const Header = () => (
    <header className="header">
         <div className="container">
            <section className="header-logo-container">
                <div className="icons">
                     <img className="icons-img" src={burguerMenu} alt="" />
                </div>
                <figure className="logo">
                    <img src={logoNegro} alt="" />
                </figure>
            </section>
             <section className="header-nav-container">
                 <Navbar/>
             </section>
        </div>
    </header>
);


export default Header;