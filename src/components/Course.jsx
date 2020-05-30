import React from 'react';
import './styles/Course.css';
import './styles/Lines.css';

import CourseItem from './CourseItem';
// import automaquillajeExpress from '../assets/static/automaquillaje-express.jpg';
// import automaquillajeEstilismo from '../assets/static/automaquillaje-y-estilismo.jpg';
// import automaquillajeTexas from '../assets/static/automaquillaje-texas.jpg';

class Course extends React.Component {
    constructor(props) {
        super(props);

        this.constant = 0;
        this.state = {
            indice: 1,
            style: "myStyle",
            leftPosition: 700
        };
        this.moveSlide = this.moveSlide.bind(this);
        // this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        //[this.constant] i'm not using state here because this var doesn't make a build rebuild is just a const
        this.constant = this.container.children['0'].clientWidth;
        // [this.mainContainer.clientWidth] main content with if you want to know how many elements you have inside
        // console.log(this.mainContainer.clientWidth);

        this.setState({
            leftPosition: this.constant - (this.constant / 3)
        });

        // here you could add resize event listener to change the constant value when the user resize the screen
    }

    moveSlide(direction) {
        // [this.container.children['0'].clientWidth] first child width use it to know how much you should translate
        // console.log('this.container ', this.container.children['0'].clientWidth);
        // [this.container.clientWidth] is the container width it could change if you add or substract
        // console.log('this.container ', this.container.clientWidth);
        // [this.props.list.length] total elements you have 
        // console.log('this.container ', this.props.list.length);

        if (direction === 'next') {
            console.log(direction);

            if (this.state.indice < this.props.list.length - 1) {
                this.setState(({ indice, leftPosition }) => ({
                    indice: indice + 1,
                    leftPosition: leftPosition + ((indice + 1) * this.constant)
                }));
            }
        } else if (direction === 'prev' && this.state.indice >= 1) {
            console.log(direction);
            if (this.state.indice > 0) {
                this.setState(({ indice, leftPosition }) => ({
                    indice: indice - 1,
                    leftPosition: leftPosition - (indice * this.constant)
                }));
            }
        }

    }

    render() {
        const { leftPosition } = this.state;
        // hecho a lo bruto obviamente no validado y como lo tenian en un principio
        let myStyle = { left: `${-1 * leftPosition}px` };
        return (
            <section id="cursos" className="course">
                <div className="title-special">
                    <hr className="line-course l-left" /><h3>cursos</h3><hr className="line-course l-right" />
                </div>

                <div ref={el => this.mainContainer = el} className="course__container">
                    <div style={myStyle} ref={(item) => this.container = item} className="course__container--details">
                        {
                            this.props.list && this.props.list.map(character => (
                                <CourseItem key={character.id} {...character} />
                            ))
                        }
                    </div>
                    <div className="direction">
                        <button id="prev" className="prev" onClick={() => this.moveSlide("prev")}>&#10094;</button>
                        <button id="next" className="next" onClick={() => this.moveSlide("next")}>&#10095;</button>
                    </div>
                </div>

            </section>

        );
    }
}

export default Course;