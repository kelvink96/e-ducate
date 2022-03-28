import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import HeroImg1 from '../../assets/img/hero-1.jpg';
import HeroImg2 from '../../assets/img/hero-2.jpg';

function Actions() {
  return (
    <Row className="py-5 my-5">
      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <Card className="h-100">
          <Card.Body>
            <Row className="align-items-center">
              <Col>
                <Card.Title>Earn a Certificate</Card.Title>
                <Card.Text>Get the right professional certificate program for you.</Card.Text>
                <Button>view programs</Button>
              </Col>
              <Col>
                <Card.Img src={HeroImg1} alt="Card image" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card className="h-100">
          <Card.Body>
            <Row className="align-items-center">
              <Col>
                <Card.Title>Best Rated Courses</Card.Title>
                <Card.Text>Enroll now in the most popular and best rated courses.</Card.Text>
                <Button>view courses</Button>
              </Col>
              <Col>
                <Card.Img src={HeroImg2} alt="Card image" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Actions;
