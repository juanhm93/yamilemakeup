import React from 'react';
import './styles/Store.css';


class Store extends React.Component{

    render(){
        return(
            <section id="tienda" className="store">
            <div className="title-special">
                <hr className="line-course l-left"/><h3>TIENDA</h3><hr className="line-course l-right"/>
            </div>
            <div className="detail-store">
                <div className="description-product-store" >
                    <h2>Juego de Brochas Salam</h2>
                    <p className="product-code">BLACK - Musu Cosmetic -3305/052</p>
                    <div></div>
                    <p className="special-p">Salam es el saludo isl&aacute;mico y significa paz.</p>
                    <p>Las brochas del maquillador son el primer contacto que tiene el cliente con el maquillaje. Son el primer encuentro. Y esto explica por qu&eacute; son tan importantes</p>
                    <p>El set de brochas "Salam" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados. <a href="#">Leer M&aacute;s</a></p>
                    <a className="link" href="#">comprar</a>
                </div>
                <div className="store-img">
                    <div className="select-products-store">
                        <img src="image/Salam brush set.png" alt=""/>
                        <img src="image/musucosmeticsdelineadorlnavaja.jpg" alt=""/>
                        <img src="image/musu cosmetics pomadas cejaseyebrows.jpg" alt=""/>
                    </div>
                    <div className="product-store">
                        <img src="image/Salam brush set.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        )
    }

}

export default Store;