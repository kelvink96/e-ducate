import React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from '../../shared/NavMenu';
import Footer from '../Footer';
import Hero from './Hero';
import Catalog from './Catalog';
import Courses from './Courses';
import Actions from './Actions';
import Testimonials from './Testimonials';

function LandingWrapper() {
  return (
    <div>
      <NavMenu />
      <Container>
        <Hero />
        <Catalog />
        <Courses />
        <Actions />
        <Testimonials />
      </Container>
      <Footer />
    </div>
  );
}

export default LandingWrapper;
