import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import HeroImg from '../../assets/img/hero.jpg';
import HeroImg1 from '../../assets/img/hero-1.jpg';
import HeroImg2 from '../../assets/img/hero-2.jpg';

function Gallery() {
  return (
    <Row className="mt-3 text-center g-3">
      <Col xs={12} md={4}>
        <Image src={HeroImg} fluid rounded={3} />
        <h1 className="display-6 fw-bold mt-3">5</h1>
        <p className="lead fw-normal">in business</p>
      </Col>
      <Col xs={12} md={4}>
        <Image src={HeroImg1} fluid rounded={3} />
        <h1 className="display-6 fw-bold mt-3">45K</h1>
        <p className="lead fw-normal">registered users</p>
      </Col>
      <Col xs={12} md={4}>
        <Image src={HeroImg2} fluid rounded={3} />
        <h1 className="display-6 fw-bold mt-3">91%</h1>
        <p className="lead fw-normal">happy customers</p>
      </Col>
    </Row>
  );
}

export default Gallery;
