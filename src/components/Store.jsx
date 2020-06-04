import React from 'react';
import './styles/Store.css';
import StoreItemDescription from './StoreItemDescription';

class Store extends React.Component{
    constructor(props){
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
                  image: 'images/musucosmeticsdelineadorlnavaja.jpg',
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
                  image: 'images/musu cosmetics pomadas cejaseyebrows.jpg',
                  selection: false,
                  clase: ''
                }
              ]
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(item) {

        this.setState(item => ({
            dataStore: [    
                {
                    id: item.id,
                    code: item.code,
                    description1: item.description1,
                    description2: item.description2,
                    description3: item.description3,
                    selection: !item.selection,
                    clase: 'selected-product'
                }
            ]
        }));
    }

    render(){
        // const thumbnails = {backgroundColor: "#d8d8d8"}
        const {dataStore} = this.state;  
        const textData = dataStore.filter(selected => selected.selection);

        return(
            <section id="tienda" className="store">
            <div className="title-special">
                <hr className="line-course l-left"/><h3>TIENDA</h3><hr className="line-course l-right"/>
            </div>
            <div className="detail-store">
            <div className="description-product-store" >
                {
                    textData && textData.map(selected => (
                        <StoreItemDescription key={selected.selection} {...selected}/>
                    )) 
                }
            </div>
                {/* <div className="store-img"> */}
                    <div className="select-products-store">
                        <div  className="select-products-store__thumbnails">
                        {this.state.dataStore && this.state.dataStore
                        .map(item => (
                                
                                 <button onClick={()=> this.handleClick(item)} key={item.ref} ><img className={item.clase} src={item.image} alt="" /> </button> 
                        ))
                        }
                        </div>
                    </div>
                    <div className="product-store">
                        {
                            textData && textData.map(selected => (
                                <img key={selected.ref} src={selected.image} alt="" />
                            ))
                        }
                    </div>
                {/* </div> */}
            </div>
        </section>
        )
    }

}

export default Store;