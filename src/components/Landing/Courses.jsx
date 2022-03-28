import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { courses } from '../../mocks/courses';
import Course from '../../shared/Course';

function Courses() {
  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="py-3 py-md-5 my-3 my-md-5">
      <div className="text-center mb-4">
        <h1 className="display-6 fw-bold">Popular courses</h1>
        <p className="lead fw-normal">Choose from hundreds of courses from specialist organizations</p>
      </div>
      <Slide {...properties}>
        {courses.map((course) => (
          <Course
            key={course.id}
            id={course.id}
            image={course.image}
            title={course.title}
            body={course.body}
            level={course.level}
            ratings={course.ratings}
            period={course.period}
          />
        ))}
      </Slide>
    </div>
  );
}

export default Courses;
