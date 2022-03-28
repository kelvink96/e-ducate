import React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from '../../shared/NavMenu';
import Description from './Description';
import Title from './Title';
import Gallery from './Gallery';
import Teams from './Teams';
import Footer from '../Footer';

function AboutUsWrapper() {
  return (
    <div>
      <NavMenu />
      <Container className="main">
        <Title />
        <Gallery />
        <Description />
        <Teams />
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUsWrapper;
