import React from 'react';
import Popup from './Popup';

class FooterLegal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup: false
        };
        this.togglePopup = this.togglePopup.bind(this);
     }   

     togglePopup(){
         this.setState({
             showPopup: !this.state.showPopup
         });
     }
    render(){
        return(
            <>
                <li><a onClick={this.togglePopup}>{this.props.data.titleLegal}</a></li>

                {this.state.showPopup ?  
                                <Popup  
                                show={this.state.showPopup}
                                text={this.props.data.titleLegal}  
                                content={this.props.data.description}
                                closePopup={this.togglePopup.bind(this)}  
                                />  
                                : null  
                                }  
            </>
        )
    }

}

export default FooterLegal;