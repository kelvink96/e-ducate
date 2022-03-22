import React from 'react';
import {
  Button, Col, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../assets/img/hero.jpg';

function Hero({ isMobile }) {
  return (
    <Row className="align-items-center py-5 my-5">
      <Col sm={12} lg={6}>
        <h1 className="display-5 fw-bold">
          A new different way to improve your skills
        </h1>
        <p className="lead fw-normal my-4">
          Online learning and teaching marketplace with 5K+ courses & 10M
          students. Taught by experts to help you acquire new skills.
        </p>
        <div className="d-flex gap-3">
          <Button variant="primary" size="lg">
            get started
          </Button>
          <Button variant="secondary" size="lg">
            <FontAwesomeIcon icon={faPlayCircle} />
            <span className="ms-2">watch video</span>
          </Button>
        </div>
      </Col>
      <Col sm={12} lg={6}>
        {!isMobile
          && <Image src={HeroImg} fluid rounded={3} />}
      </Col>
    </Row>
  );
}

export default Hero;
