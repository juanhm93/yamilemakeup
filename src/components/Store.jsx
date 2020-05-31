import React from 'react';
import './styles/Store.css';
import StoreItemsThumbnails from './StoreItemsThumbnails';
import StoreItemDescription from './StoreItemDescription';


class Store extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
    }

    render(){
        return(
            <section id="tienda" className="store">
            <div className="title-special">
                <hr className="line-course l-left"/><h3>TIENDA</h3><hr className="line-course l-right"/>
            </div>
            <div className="detail-store">
            <div className="description-product-store" >
                {
                    this.props.listImg && this.props.listImg.map(character => (
                        <StoreItemDescription key={character.id}{...character}/>
                    )) 
                }
            </div>
                <div className="store-img">
                    <div className="select-products-store">
                        <div className="select-products-store__thumbnails">
                        {this.props.listImg && this.props.listImg.map(character => (
                            <StoreItemsThumbnails key={character.id}{...character} />
                        ))
                        }
                        </div>
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