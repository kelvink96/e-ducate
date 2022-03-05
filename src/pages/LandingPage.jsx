import React from 'react';
import { Container } from 'react-bootstrap';
import NavMenu from '../parts/NavMenu';
import {
  Actions, Catalog, Courses, Hero, Testimonials,
} from '../components/Landing';
import Footer from '../components/Footer';

function LandingPage() {
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

export default LandingPage;
