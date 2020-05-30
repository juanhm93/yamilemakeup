import React from 'react';
import Popup from './Popup';

class CourseItem extends React.Component {

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

    return (
    <div className="course__container--img">
                <button onClick={this.togglePopup}><img className="img-course"  src={this.props.imgCourse} alt="" /></button>
                <p>{this.props.name}</p>
            {this.state.showPopup ?  
        <Popup  
            show={this.state.showPopup}
          text={this.props.name}  
          closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  
            </div>
    ); 
   }
}



export default CourseItem;