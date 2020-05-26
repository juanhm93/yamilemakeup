import React from 'react';
import './styles/Biography.css';
import regina from '../assets/static/regina_peredo.png';
import daniela from '../assets/static/daniela_kosan.png';
import ana from '../assets/static/ana_simpson.png';
const Biography = () => (
    <section id="biografia" className="biography">
    <div className="biography-detail">
        <h1>TRAYECTORIA MAKEUPARTIST</h1>
        <article>
            <p>Venezolana, naci&oacute; el 26 junio de 1981 en San Felix, Edo Bolivar</p>
            <p>Desde muy joven estuvo en Modelaje, particip&oacute; en concursos de Bellezas, ganadora de Mara de Oro y Cacique de Oro como modelo del año dek Estado Bolivar</p>
            <p>Se caso a los 20 años con el Dr Alejandro Teran, tuvo 2 Hijos Alejandro y Carlota</p>
            <p>Siempre amante del maquillaje y la belleza Yamileth decide incursionar <br /> profesionalmente en el mundo del paquilaje a los 32 años, inicia su preparaci&oacute;n en diferentes cursos maquillaje con Artistas como Franklin Salomon con quien realiz&oacute; dos adiestramientos, y asi comez&oacute; sus pasos  por el mundo del maquillaje y para alcanzar un nivel superior realiz&oacute; un Proworkshop con la Makeup Artist Amanda Salazar La Musu, con quien termin&oacute; de pulir sus t&eacute;nicas y quedando como una de las alumnas m&aacute;s destacadas del Proworkshop y seleccionada para formar parte del Musuteam (grupo de profesionales del maquillaje entrenados por La Musu y desplegados en diferentes pa&iacute;ses) </p>
            <p>Actualmente reside en los Estados Unidos en la ciudad de Katy en Houston Texas. Donde es reconocida como una de mas maquiladoras m&aacute;s destacadas de la ciudad.</p>
            <p>#NoMasCarasLavadas</p>
            <a className="link" href="">ver portafolio</a>
        </article>
    </div>
    <div className="biography-images-container">
        <div className="miss-image">
            <img src={regina} alt="" />
            <p>Regina peredo - <br /><span>Miss Panamericana</span></p>
        </div>
        <div className="ceo-image">
            <img src={daniela} alt="" />
            <p>Daniela Kos&aacute;n - <br /><span>CEO y Emprendedora.</span></p>
        </div>
        <div className="actress-image">
            <img src={ana} alt="" />
            <p>Ana Maria Simpson - <br /><span>Actriz y Productora</span></p>
        </div>
        <hr className="biography-line" />
    </div>
</section>

);

export default Biography;