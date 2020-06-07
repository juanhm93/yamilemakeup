import React from 'react';  
import './styles/Popup.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup' >  
<div className={this.props.text === "Terminos" || this.props.text === "Condiciones" ? 'popup-inner popup-add' : 'popup-inner'}>  
<button onClick={this.props.closePopup}>X</button>  
        <h1>{this.props.text}</h1>
        {this.props.text === "Terminos" || this.props.text === "Condiciones"  ? 
          this.props.content ?
         <div className="terms">
            <div>{this.props.content}</div>
         </div> 
          : 
              null
          : <p>{this.props.content}</p>
        }  
</div>  
</div>  
);  
}  
}  

export default Popup;