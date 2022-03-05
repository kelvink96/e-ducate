import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { courses } from '../../mocks/courses';
import Course from '../../shared/Course';
import BasicPagination from '../../shared/Pagination';

function Courses() {
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-3">
        {courses.map((course) => (
          <Col>
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
          </Col>
        ))}
      </Row>
      <BasicPagination />
    </div>
  );
}

export default Courses;
