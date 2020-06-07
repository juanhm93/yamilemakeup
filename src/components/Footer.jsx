import React from 'react';
import './styles/Footer.css';
import FooterList from './FooterList';
import WhiteLogo from '../assets/static/logo Blanco Yamile.png';
import FooterLegal from './FooterLegal';

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
        // const legalFooter = {
        //     termino: 'Lorem ipson',
        //     clase: 'legal-footer',
        //     items: [
        //         {
        //            item: 'Terminos',
        //            reference: 'https://instagram.com'
        //         },
        //         {
        //            item: 'Privacidad',
        //            reference: 'https://facebook.com'
        //         }

        //     ]
        // }
        const terms = {
            titleLegal: 'Terminos',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        }
        const condition = {
            titleLegal: 'Condiciones',
            description: '60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
        }
        return(
                <footer class="footer">
            <div class="footer-information">
                <div class="options-footer-container">
                    <FooterList data={explorerFooter} />
                    <FooterList data={visitFooter} />
                    <FooterList data={networkFooter} />
                    {/* <FooterList data={legalFooter} /> */}
                    <div className="legal-footer">
                          <h6>Legal</h6>
                        <ul>
                            <FooterLegal data={terms} />
                            <FooterLegal data={condition} />
                            {/* <li><a onClick={}>Privacidad</a></li> */}
                        </ul> 
                    </div>
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