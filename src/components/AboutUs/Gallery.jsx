import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import HeroImg from '../../assets/img/hero.jpg';
import HeroImg1 from '../../assets/img/hero-1.jpg';
import HeroImg2 from '../../assets/img/hero-2.jpg';

function Gallery() {
  return (
    <Row className="mt-3">
      <Col><Image src={HeroImg} fluid rounded={3} /></Col>
      <Col><Image src={HeroImg1} fluid rounded={3} /></Col>
      <Col><Image src={HeroImg2} fluid rounded={3} /></Col>
    </Row>
  );
}

export default Gallery;
