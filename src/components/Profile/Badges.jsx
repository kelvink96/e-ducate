import React from 'react';
import {
  Button,
  Card, Col, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import BadgeIcon from '../../assets/img/badge-icon.png';

function Badges() {
  return (
    <div className="py-5">
      <h4 className="mb-4 text-capitalize">latest badge</h4>
      <Row xs={1} md={2} className="g-3 mb-3">
        <Col>
          <Card className="text-center h-100">
            <Card.Body>
              <Image src={BadgeIcon} fluid height={100} width={100} />
              <Card.Title className="my-4">Course Completed: Learn C#</Card.Title>
              <Card.Text>Jan 4, 2022</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center h-100">
            <Card.Body>
              <Image src={BadgeIcon} fluid height={100} width={100} />
              <Card.Title className="my-4">Module Completed: Learn C#: Data Types and Variables</Card.Title>
              <Card.Text>Jan 4, 2022</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="outline-primary" className="float-end">
        view all
        &nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  );
}

export default Badges;
