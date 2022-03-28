import React from 'react';
import {
  Button,
  Card,
  Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faFilm, faPlay, faUsers, faUserTie,
} from '@fortawesome/free-solid-svg-icons';

function Catalog() {
  return (
    <div className="align-items-center py-3 py-md-5 my-3 my-md-5">
      <h1 className="display-6 fw-bold mb-4 text-center">What kind of courses offers learning platform</h1>
      <Row xs={2} md={4} className="g-1 g-md-3 py-3">
        <Col>
          <Card className="h-100 border-0 text-capitalize text-center text-md-start">
            <Card.Body>
              <Card.Title className="d-flex align-items-center flex-column flex-md-row gap-3">
                <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                  <FontAwesomeIcon icon={faFilm} className="text-primary fa-fw" />
                </span>
                1500+ courses
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 text-capitalize text-center text-md-start">
            <Card.Body>
              <Card.Title className="d-flex align-items-center flex-column flex-md-row gap-3">
                <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                  <FontAwesomeIcon icon={faPlay} className="text-primary fa-fw" />
                </span>
                200+ free videos
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 text-capitalize text-center text-md-start">
            <Card.Body>
              <Card.Title className="d-flex align-items-center flex-column flex-md-row gap-3">
                <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                  <FontAwesomeIcon icon={faUsers} className="text-primary fa-fw" />
                </span>
                10K+ lessons
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0 text-capitalize text-center text-md-start">
            <Card.Body>
              <Card.Title className="d-flex align-items-center flex-column flex-md-row gap-3">
                <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                  <FontAwesomeIcon icon={faUserTie} className="text-primary fa-fw" />
                </span>
                quality instructors
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center">
        <Button href="/courses" variant="outline-primary">
          explore courses
          &nbsp;
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </div>
  );
}

export default Catalog;
