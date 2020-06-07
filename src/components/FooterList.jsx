import React from 'react';
import {Link } from 'react-scroll';


class FooterList extends React.Component{
    
    render(){

        return(
            <div className={this.props.data.clase}>
                        <h6>{this.props.data.title}</h6>
                        <ul>
                        {this.props.data.title === "Explora" ?
                               
                                   this.props.data && this.props.data.items.map(list => (
                                   <li key={list.item} ><Link activeClass="active"  to={list.reference} spy={true} smooth={true} offset={-80} duration={500}   >{list.item}</Link></li>
                                   ))
                             
                           : this.props.data.title !== 'Legal' ? 
                         
                                                    this.props.data && this.props.data.items.map(list => (
                                                    <li key={list.item} ><a href={list.reference} target="_blank"  >{list.item}</a></li>
                                                    ))
                                            : 
                                                    this.props.data && this.props.data.items.map(list => (
                                                        
                                                    <li key={list.item} ><a onClick={this.togglePopup}  >{list.item}</a></li>
                                                    ))
                                             
                                       
                
                        }
                         </ul>

                        
            </div>
        );
    }
}
export default FooterList;