import React from 'react';
import CourseButton from './CourseButton';
import './styles/Course.css';
import './styles/Lines.css';
// import automaquillajeExpress from '../assets/static/automaquillaje-express.jpg';
// import automaquillajeEstilismo from '../assets/static/automaquillaje-y-estilismo.jpg';
// import automaquillajeTexas from '../assets/static/automaquillaje-texas.jpg';

const Course = ({children}) => (
    <section id="cursos" className="course">
    <div className="title-special">
        <hr className="line-course l-left" /><h3>cursos</h3><hr className="line-course l-right" /> 
    </div>
    <div className="course__container">
        <div className="course__container--details">
            {children}
        </div>
        <div className="direction">
          <CourseButton/>
        </div>
    </div>
</section>
);

export default Course;