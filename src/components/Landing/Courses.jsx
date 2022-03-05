import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { courses } from '../../mocks/courses';
import Course from '../../shared/Course';

function Courses() {
  const properties = {
    duration: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    indicators: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
    <div>
      <div>
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
    </div>
  );
}

export default Courses;
