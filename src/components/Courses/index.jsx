import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../../shared/NavMenu';
import Header from './Header';
import FiltersSection from './FiltersSection';
import Courses from './Courses';
import Footer from '../Footer';

function CoursesWrapper() {
  return (
    <div>
      <NavMenu />
      <Container className="pt-4">
        <Row>
          <Col lg={9}>
            <Header />
            <Courses />
          </Col>
          <Col lg={3}>
            <FiltersSection />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default CoursesWrapper;
