import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import HeroImg1 from '../../assets/img/hero-1.jpg';
import HeroImg2 from '../../assets/img/hero-2.jpg';

function Actions() {
  return (
    <Row>
      <Col>
        <Card>
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
      <Col>
        <Card>
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