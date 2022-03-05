import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import HeroImg from '../../assets/img/hero.jpg';
import HeroImg1 from '../../assets/img/hero-1.jpg';
import HeroImg2 from '../../assets/img/hero-2.jpg';

function Gallery() {
  return (
    <Row>
      <Col><Image src={HeroImg} fluid /></Col>
      <Col><Image src={HeroImg1} fluid /></Col>
      <Col><Image src={HeroImg2} fluid /></Col>
    </Row>
  );
}

export default Gallery;
