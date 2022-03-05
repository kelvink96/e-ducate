import React from 'react';
import {
  Button, Col, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../assets/img/hero.jpg';

function Hero() {
  return (
    <Row className="align-items-center">
      <Col>
        <h1 className="display-4">
          a new different way to improve your skills
        </h1>
        <p>
          Online learning and teaching marketplace with 5K+ courses & 10M
          students. Taught by experts to help you acquire new skills.
        </p>
        <div className="d-flex gap-3">
          <Button variant="primary" size="lg">
            get started
          </Button>
          <Button variant="white" size="lg">
            <FontAwesomeIcon icon={faPlayCircle} />
            <span className="ms-2">watch video</span>
          </Button>
        </div>
      </Col>
      <Col>
        <Image src={HeroImg} fluid rounded={3} />
      </Col>
    </Row>
  );
}

export default Hero;
