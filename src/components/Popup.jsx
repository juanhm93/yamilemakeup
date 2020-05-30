import React from 'react';  
import './styles/Popup.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup' style={{  transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)'}} >  
<div className='popup-inner'>  
<button onClick={this.props.closePopup}>Cerrar</button>  
<h1>{this.props.text}</h1>  
</div>  
</div>  
);  
}  
}  

export default Popup;