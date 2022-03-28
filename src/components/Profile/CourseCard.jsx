import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faShapes } from '@fortawesome/free-solid-svg-icons';

function CourseCard({
  body, id, progress, title, type,
}) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center">
          <Col sm={12} md={9}>
            <Card.Text className="text-capitalize small">
              <FontAwesomeIcon icon={faShapes} className="me-2" />
              {type}
              {' '}
              course
            </Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body.length > 120 ? `${body.substring(0, 119)}...` : body}</Card.Text>
          </Col>
          <Col sm={12} md={3} className="text-start text-md-end mt-3 mt-md-0">
            <Button variant="outline-primary" href={`/course/${id}`}>
              resume
              <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <div
        className="bg-primary position-absolute bottom-0"
        style={{ height: '3px', width: `${progress}%`, borderRadius: '50px' }}
      />
    </Card>
  );
}

export default CourseCard;
