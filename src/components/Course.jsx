import React from 'react';
import './styles/Course.css';
import './styles/Lines.css';
// import automaquillajeExpress from '../assets/static/automaquillaje-express.jpg';
// import automaquillajeEstilismo from '../assets/static/automaquillaje-y-estilismo.jpg';
// import automaquillajeTexas from '../assets/static/automaquillaje-texas.jpg';

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={
            indice: 1,
            style: "myStyle"
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    nextSlide(){
        console.log("next1 "+this.state.indice); 
        this.setState((state) => ({
            indice: this.state.indice + 1
        }));
        console.log("next2 "+this.state.indice); 
    
    }
    prevSlide(){
        this.setState((state) => ({
            indice: this.state.indice - 1
        }));
        console.log("prev "+this.state.indice);      
    }

    render(){

    // hecho a lo bruto obviamente no validado y como lo tenian en un principio
        let myStyle = {};
        if(this.state.indice === 1){
            myStyle = {
                left: '-700px'
            }
        }else{
            if(this.state.indice > 1){
                myStyle = {
                    left: '-1250px'
                }
            }else{
                if(this.state.indice < 1 ){
                    myStyle = {
                        left: '-150px'
                    }
                }
            }
        }
        return(
            <section id="cursos" className="course">
                <div className="title-special">
                    <hr className="line-course l-left" /><h3>cursos</h3><hr className="line-course l-right" /> 
                </div>
                <div  className="course__container">
                    <div style={myStyle} className="course__container--details">
                        {this.props.children}
                    </div>
                    <div className="direction">
                        <button  id="prev" className="prev" onClick={this.prevSlide}>&#10094;</button>
                        <button  id="next" className="next" onClick={this.nextSlide}>&#10095;</button>
                    </div>
                </div>
            </section>    

        );
    }
}

export default Course;