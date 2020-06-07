import React from 'react';
import {Link } from 'react-scroll';
import Popup from './Popup';

class FooterList extends React.Component{
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
            <div className={this.props.data.clase}>
                        <h6>{this.props.data.title}</h6>
                        {this.props.data.title === "Explora" ?
                               <ul>
                               {
                                   this.props.data && this.props.data.items.map(list => (
                                   <li key={list.item} ><Link activeClass="active"  to={list.reference} spy={true} smooth={true} offset={-80} duration={500}   >{list.item}</Link></li>
                                   ))
                               }
                           </ul> : null
                        }    
                        {this.props.data.title === "Legal" ?
                             
                             <ul>
                             {
                             this.props.data && this.props.data.items.map(list => (
                             <li key={list.item} ><a onClick={this.togglePopup} >{list.item}</a></li>
                             ))
                            }
                            {this.state.showPopup ?  
                                <Popup  
                                    show={this.state.showPopup}
                                text={this.props.title}  
                                closePopup={this.togglePopup.bind(this)}  
                                />  
                                : null  
                            }  
                            </ul>  
                         :   
                           <ul>
                                {
                                this.props.data && this.props.data.items.map(list => (
                                <li key={list.item} ><a href={list.reference} target="_blank" >{list.item}</a></li>
                                ))
                            }
                        </ul>
                        }
            </div>
        );
    }
}
export default FooterList;