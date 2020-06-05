import React from 'react';
import './styles/ButtonScroll.css';
import flecha from '../assets/static/Arrow-Circle-Left-Normal.png';

class ButtonScroll extends React.Component {
    constructor(props){
        super(props)
        this.scrollFunction = this.scrollFunction.bind(this);
    }
    scrollFunction(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render(){
        return(
        <div className="button-scroll">
         <img onClick={this.scrollFunction} src={flecha} alt="" />
        </div>
        );
    }
}

export default  ButtonScroll;