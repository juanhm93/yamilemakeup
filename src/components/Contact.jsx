import React from 'react';
import './styles/Contact.css';
import imageOne from '../assets/static/Intersección 5.png';
import imageTwo from '../assets/static/Intersección 6.png';
import imageThree from '../assets/static/Intersección 7.png';

class Contact extends React.Component{

    render(){
        return(
        <section id="contacto" className="contact">
            <div className="title-contact">
                <h2>S&iacute;gueme en Instagram <br/> y conoce m&aacute;s sobre mi</h2>
                <div/>
            </div>
            <div className="images-contact">
                <img src={imageOne} alt=""/>
                <img src={imageTwo} alt=""/>
                <img src={imageThree} alt=""/>
            </div>
        </section>

        );
    }
}

export default Contact;