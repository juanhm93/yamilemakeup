import React from 'react';

const CourseItem = ({imgCourse,name}) => (
    <div className="course__container--img">
                <img className="img-course"  src={imgCourse} alt="" />
                <p>{name}</p>
    </div>
);

export default CourseItem;