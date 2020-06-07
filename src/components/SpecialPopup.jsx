import React from 'react';  
import './styles/Popup.css';  

class SpecialPopup extends React.Component {  
  render() {  
return (  
<div className='Popup' >  
<div className='special__popup-inner'>  
<button onClick={this.props.closePopup}>Cerrar</button>  
    <h1>{this.props.text}</h1>  
    <p>{this.props.content}</p>
</div>  
</div>  
);  
}  
}  

export default SpecialPopup;