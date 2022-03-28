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
      <Container className="pt-4 main">
        <Row>
          <Col xs={12} lg={9}>
            <Header />
            <Courses />
          </Col>
          <Col xs={12} lg={3} className="d-none d-md-block">
            <FiltersSection />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default CoursesWrapper;
