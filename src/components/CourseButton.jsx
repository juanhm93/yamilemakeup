import React from 'react';

class CourseButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left: -300
        };
        this.nextSlide = this.nextSlide.bind(this);
    }
    nextSlide (){
        
    }
    render(){
        return(
            <>
                <button  id="prev" className="prev" onClick="nextSlide(-1)">&#10094;</button>
                <button  id="next" className="next" onClick="nextSlide(1)">&#10095;</button>
            </>
        );
    }

}

export default CourseButton;