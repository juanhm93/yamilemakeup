import React from 'react';
import './styles/Store.css';
import StoreItemDescription from './StoreItemDescription';

class Store extends React.Component {
    constructor(props) {
        super(props)

        this.constant = 0;
        this.state = {
            indice: 1,
            topPosition: 100,
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
        this.moveSlideVertical = this.moveSlideVertical.bind(this);
    }

    componentDidMount(){
        this.constant = this.container.children['0'].clientHeight;
        // [this.mainContainer.clientWidth] main content with if you want to know how many elements you have inside
        // console.log(this.mainContainer.clientWidth);
        console.log(this.constant);
        this.setState({
            topPosition:  this.constant * (-1/3)
        });
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


    moveSlideVertical(direction) {
        if (direction === 'next') {
            console.log(direction);

            if (this.state.indice < this.state.dataStore.length - 1) {
                this.setState(({ indice, topPosition }) => ({
                    indice: indice + 1,
                    topPosition: topPosition + ((indice + 1) * this.constant)
                }));
            }
        } else if (direction === 'prev' && this.state.indice >= 1) {
            console.log(direction);
            if (this.state.indice > 0) {
                this.setState(({ indice, topPosition }) => ({
                    indice: indice - 1,
                    topPosition: topPosition - (indice * this.constant)
                }));
            }
        }
    }

    render() {
        // const thumbnails = {backgroundColor: "#d8d8d8"}
        const {topPosition} = this.state;
        const { dataStore } = this.state;

        let myStyle = {top: `${-1 * topPosition}px`};
        // el metodo find devuelve el primer dato en el arreglo que cumpla con la funcion que se le pase como parametro
        // en este caso seleccion sea igual a true
        const toShow = dataStore.find(el => el.selection) || null;
        return (
            <section id="tienda" className="store">
                <div className="title-special">
                    {/* {toShow.id} */}
                    <hr className="line-course l-left" /><h3>TIENDA</h3><hr className="line-course l-right" />
                </div>
                <div className="detail-store">
                    <div className="description-product-store" >
                        {
                            toShow && <StoreItemDescription key={toShow.id} {...toShow} />
                        }
                    </div>
                    {/* <div className="store-img"> */}
                    <div ref={el => this.mainContainer = el} className="select-products-store">
                        <div style={myStyle} ref={(item) => this.container = item} className="select-products-store__thumbnails">
                            {this.state.dataStore && this.state.dataStore
                                .map(item => (
                                    <img onClick={() => this.handleClick(item)} key={item.id} className={item.clase} src={item.thumbnails} alt={`${item.selection}`} />
                                ))
                            }
                        </div>
                        <div className="direction-vertical">
                        <button id="prev-v" className="prev-v" onClick={() => this.moveSlideVertical("prev")}>&#10094;</button>
                        <button id="next-v" className="next-v" onClick={() => this.moveSlideVertical("next")}>&#10095;</button>
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