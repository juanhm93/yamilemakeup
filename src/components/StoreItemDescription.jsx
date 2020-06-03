import React from 'react';

class StoreItemDescription extends React.Component {
     
     render(){
          return(
     
         <>
         <h2>{this.props.title}</h2>
                         <p className="product-code">{this.props.code}</p>
                         <div/>
                         <p className="special-p">{this.props.description1}</p>
                         <p> {this.props.description2}</p>
                         <p> {this.props.description3} </p>
                              {/* <a href="#">Leer M&aacute;s</a> */}
                         {/* <a className="link" href="#">comprar</a> */}
          </>
          )
     }
}

export default StoreItemDescription;
