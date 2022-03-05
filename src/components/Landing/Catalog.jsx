import React from 'react';
import {
  Button,
  Card,
  Col, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm, faPlay, faUsers, faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import CatalogImg from '../../assets/img/catalog.jpg';

function Catalog() {
  return (
    <Row className="align-items-center">
      <Col>
        <h1 className="display-6">what kind of courses offers learning platform</h1>
        <Image src={CatalogImg} fluid rounded={3} />
      </Col>
      <Col className="text-start">
        <Row xs={1} md={2} className="g-3">
          <Col>
            <Card className="h-100 border-0">
              <Card.Body>
                <Card.Title>
                  <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                    <FontAwesomeIcon icon={faFilm} className="text-primary" />
                  </span>
                  1500+ courses
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 border-0">
              <Card.Body>
                <Card.Title>
                  <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                    <FontAwesomeIcon icon={faPlay} className="text-primary" />
                  </span>
                  200+ free videos
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 border-0">
              <Card.Body>
                <Card.Title>
                  <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                    <FontAwesomeIcon icon={faUsers} className="text-primary" />
                  </span>
                  10K+ lessons
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 border-0">
              <Card.Body>
                <Card.Title>
                  <span className="py-2 px-3 rounded-3 bg-primary bg-opacity-10 me-2">
                    <FontAwesomeIcon icon={faUserTie} className="text-primary" />
                  </span>
                  quality instructors
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body>
                <Button>explore courses</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Catalog;
