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
      <Container>
        <Row>
          <Col sm={12} md={2}>
            <Profile />
          </Col>
          <Col sm={12} md={7}>
            <h4>latest activity</h4>
            {courses.slice(0, 5).map((c) => (
              <CourseCard key={`cou-${c.id}`} title={c.title} type={c.type} body={c.body} progress={c.progress} id={c.id} />
            ))}
            <Certifications />
            <Badges />
          </Col>
          <Col sm={12} md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Header>achievements</Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem>badges</ListGroupItem>
                <ListGroupItem>trophies</ListGroupItem>
                <ListGroupItem>reputation</ListGroupItem>
                <ListGroupItem>followers</ListGroupItem>
                <ListGroupItem>following</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileWrapper;
