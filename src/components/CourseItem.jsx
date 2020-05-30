import React from 'react';

const CourseItem = ({imgCourse,name}) => {

            const alertaRoja = () => {
                window.alert("pega la info");
            }
   
    return  <div className="course__container--img">
                <button onClick={alertaRoja}><img className="img-course"  src={imgCourse} alt="" /></button>
                <p>{name}</p>
            </div>
}



export default CourseItem;