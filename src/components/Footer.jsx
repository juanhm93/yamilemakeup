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
                           reference: 'https://google.com'
                        },
                        {
                           item: 'Portafolio',
                           reference: 'https://google.com'
                        },
                        {
                           item: 'Cursos',
                           reference: 'https://google.com'
                        },
                        {
                           item: 'Tienda',
                           reference: 'https://google.com'
                        },
                        {
                           item: 'Contacto',
                           reference: 'https://google.com'
                        }
                    ]
        }

        const visitFooter = {
    
            title: 'Visita',
            clase: 'visit-footer',
            items: [
                {
                   item: 'Musuteam',
                   reference: 'https://google.com'
                }
            ]
        }

        const networkFooter =  {
            title: 'Redes',
            clase: 'network-footer',
            items: [
                {
                   item: 'Instagram',
                   reference: 'https://instagram.com'
                },
                {
                   item: 'Facebook',
                   reference: 'https://facebook.com'
                },
                {
                   item: 'Youtube',
                   reference: 'https://youtube.com'
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