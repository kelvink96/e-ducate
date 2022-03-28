import React from 'react';
import {
  Card,
  Col, Container, ListGroup, ListGroupItem, Row,
} from 'react-bootstrap';
import NavMenu from '../../shared/NavMenu';
import { courses } from '../../mocks/courses';
import CourseCard from './CourseCard';
import Profile from './Profile';
import Certifications from './Certifications';
import Badges from './Badges';

function ProfileWrapper() {
  return (
    <div>
      <NavMenu />
      <Container className="main">
        <Row className="py-5">
          <Col sm={12} md={2}>
            <Profile />
          </Col>
          <Col sm={12} md={7} className="mt-5 mt-md-0">
            <h4 className="mb-4 text-capitalize display-6 fw-bold">latest activity</h4>
            {courses.slice(0, 5).map((c) => (
              <CourseCard key={`cou-${c.id}`} title={c.title} type={c.type} body={c.body} progress={c.progress} id={c.id} />
            ))}
            <Certifications />
            <Badges />
          </Col>
          <Col sm={12} md={3} className="mt-3 mt-md-0">
            <Card>
              <Card.Header className="bg-transparent border-0"><h4>Achievements</h4></Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem action className="d-flex justify-content-between">
                  <span>Badges</span>
                  <b>35</b>
                </ListGroupItem>
                <ListGroupItem action className="d-flex justify-content-between">
                  <span>Trophies</span>
                  <b>7</b>
                </ListGroupItem>
                <ListGroupItem action className="d-flex justify-content-between">
                  <span>Reputation</span>
                  <b>1</b>
                </ListGroupItem>
                <ListGroupItem action className="d-flex justify-content-between">
                  <span>Followers</span>
                  <b>0</b>
                </ListGroupItem>
                <ListGroupItem action className="d-flex justify-content-between">
                  <span>Following</span>
                  <b>0</b>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileWrapper;
