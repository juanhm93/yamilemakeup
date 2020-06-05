import React from 'react';

class FooterList extends React.Component{

    render(){
        return(
            <div className={this.props.data.clase}>
                        <h6>{this.props.data.title}</h6>
                        <ul>
                            {
                                this.props.data && this.props.data.items.map(list => (
                                <li key={list.item} ><a href={list.reference} >{list.item}</a></li>
                                ))
                            }
                        </ul>
            </div>
        );
    }
}
export default FooterList;