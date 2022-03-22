import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

function Course({
  id, image, title, body, level, ratings, period,
}) {
  return (
    <Card className="h-100 me-1">
      <Card.Img variant="top" height={200} src={image} style={{ objectFit: 'cover' }} />
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Badge bg="secondary" className="text-dark fs-6 text-capitalize">{level}</Badge>
          <Button variant="white">
            <FontAwesomeIcon icon={faBookmark} />
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faStar} className="me-2" />
            {ratings}
          </Card.Text>
        </div>
        <Card.Text>{body.length > 150 ? `${body.substring(0, 149)}...` : body}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center bg-transparent">
        <LinkContainer to={`/course/${id}`}>
          <Button variant="outline-primary">
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            book now
          </Button>
        </LinkContainer>
        <Card.Text>
          <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
          {period}
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}

Course.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  level: PropTypes.string,
  ratings: PropTypes.string,
  period: PropTypes.string,
};

export default Course;
