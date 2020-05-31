import React from 'react';

class StoreItemsThumbnails extends React.Component{
    constructor(props){
        super(props);
         
     }   
    render(){
        return(
            <>
                       <button><img src={this.props.tumbnails} alt=""/></button> 
            </>
        )
    }
}

export default StoreItemsThumbnails;