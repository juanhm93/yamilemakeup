import React from 'react';
import './styles/Store.css';
import StoreItemDescription from './StoreItemDescription';

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataStore: [
                {
                    id: 4,
                    title: 'Juego de Brochas Salam',
                    code: 'BLACK - Musu Cosmetic -3305/052',
                    description1: 'Salam es el saludo isl&aacute;mico y significa paz.',
                    description2: 'Las brochas del maquillador son el primer contacto que tiene el cliente con el maquillaje. Son el primer encuentro. Y esto explica por qu&eacute; son tan importantes',
                    description3: 'El set de brochas "Salam" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados.',
                    thumbnails: 'images/Salambrushset.png',
                    image: 'images/Salambrushset.png',
                    selection: true,
                    clase: 'selected-product'
                },
                {
                    id: 5,
                    title: 'Otro titulo diferente',
                    code: 'WHITE - cambiado',
                    description1: 'Salam es el saludo isl&aacute;mico y significa paz.',
                    description2: 'Las brochas del maquillador son el primer contacto que tiene el cliente con el maquillaje. Son el primer encuentro. Y esto explica por qu&eacute; son tan importantes',
                    description3: 'El set de brochas "Salam" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados.',
                    thumbnails: 'images/musucosmeticsdelineadorlnavaja.jpg',
                    image: '',
                    selection: false,
                    clase: ''
                },
                {
                    id: 6,
                    title: 'Mas valores agregados',
                    code: 'WHITE - cambiado',
                    description1: 'Salam es el saludo isl&aacute;mico y significa paz.',
                    description2: 'Las brochas del maquillador son el primer contacto que tiene el cliente con el maquillaje. Son el primer encuentro. Y esto explica por qu&eacute; son tan importantes',
                    description3: 'El set de brochas "Salam" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados.',
                    thumbnails: 'images/musu cosmetics pomadas cejaseyebrows.jpg',
                    image: '',
                    selection: false,
                    clase: ''
                }
            ]
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(item) {
        this.setState(({ dataStore }) => ({
            dataStore: dataStore.map(el => {
                if (el.id === item.id) {
                    return {
                        ...el, selection: true,
                        clase: 'selected-product'
                    }
                }
                return { ...el, clase: '', selection: false }
            })
        }));
    }

    render() {
        // const thumbnails = {backgroundColor: "#d8d8d8"}
        const { dataStore } = this.state;
        // el metodo find devuelve el primer dato en el arreglo que cumpla con la funcion que se le pase como parametro
        // en este caso seleccion sea igual a true
        const toShow = dataStore.find(el => el.selection) || null;
        return (
            <section id="tienda" className="store">
                <div className="title-special">
                    {toShow.id}
                    <hr className="line-course l-left" /><h3>TIENDA</h3><hr className="line-course l-right" />
                </div>
                <div className="detail-store">
                    <div className="description-product-store" >
                        {
                            toShow && <StoreItemDescription key={toShow.id} {...toShow} />
                        }
                    </div>
                    {/* <div className="store-img"> */}
                    <div className="select-products-store">
                        <div className="select-products-store__thumbnails">
                            {this.state.dataStore && this.state.dataStore
                                .map(item => (
                                    <button onClick={() => this.handleClick(item)} key={item.id} ><img className={item.clase} src={item.thumbnails} alt={`${item.selection}`} /> </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-store">
                        {
                            toShow && <img key={toShow.id} src={toShow.thumbnails} alt={toShow.description1} />
                        }
                    </div>
                    {/* </div> */}
                </div>
            </section>
        )
    }

}

export default Store;