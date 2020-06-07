import React from 'react';
import './styles/Footer.css';
import FooterList from './FooterList';
import WhiteLogo from '../assets/static/logo Blanco Yamile.png';

class Footer extends React.Component{

    render(){
        const explorerFooter = {
                    title: 'Explora',
                    clase: 'explorer-footer',
                    items: [
                        {
                           item: 'Bio',
                           reference: 'portada'
                        },
                        {
                           item: 'Portafolio',
                           reference: 'biografia'
                        },
                        {
                           item: 'Cursos',
                           reference: 'cursos'
                        },
                        {
                           item: 'Tienda',
                           reference: 'tienda'
                        },
                        {
                           item: 'Contacto',
                           reference: 'contacto'
                        }
                    ]
        }

        const visitFooter = {
    
            title: 'Visita',
            clase: 'visit-footer',
            items: [
                {
                   item: 'Musuteam',
                   reference: 'https://www.lamusu.com/musu-team'
                }
            ]
        }

        const networkFooter =  {
            title: 'Redes',
            clase: 'network-footer',
            items: [
                {
                   item: 'Instagram',
                   reference: 'https://www.instagram.com/yamilemakeup/?igshid=elzox8dm8nf4'
                },
                {
                   item: 'Facebook',
                   reference: 'https://www.facebook.com/Yamilemakeup/'
                },
                {
                   item: 'Youtube',
                   reference: ' https://www.youtube.com/channel/UCk0pDqKt8hNJmb0Rpa8r_6g'
                }

            ]
        }
        const legalFooter = {
            title: 'Legal',
            clase: 'legal-footer',
            items: [
                {
                   item: 'Terminos',
                   reference: 'https://instagram.com'
                },
                {
                   item: 'Privacidad',
                   reference: 'https://facebook.com'
                }

            ]
        }
        return(
                <footer class="footer">
            <div class="footer-information">
                <div class="options-footer-container">
                    <FooterList data={explorerFooter} />
                    <FooterList data={visitFooter} />
                    <FooterList data={networkFooter} />
                    <FooterList data={legalFooter} />
                </div>
                <div class="copyright-container">
                    <div class="copyright">
                        <p>© 2020 yamile makeup. todos <span>los</span> derechos reservados.</p>
                    </div>
                    <div class="country-city">
                        <p>Estados Unidos, Houston Texas</p>
                    </div>
                </div>
            </div>
            <div class="logo-footer">
                <img src={WhiteLogo} alt=""/>
            </div>
        </footer>
        );
    }
}

export default Footer;