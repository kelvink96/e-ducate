import React from 'react';
import {
  Button,
  Card, Col, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { team } from '../../mocks/team';

function Teams() {
  return (
    <div className="py-5 my-5">
      <h2 className="display-6 fw-bold mb-5 text-center">Meet Our Team</h2>
      <Row xs={1} md={2} lg={4} className="g-3 justify-content-center">
        {team.map((t) => (
          <Col key={t.id}>
            <Card className="h-100 text-center">
              <Card.Header className="bg-transparent border-0">
                <Image src={t.avatarImg} roundedCircle width={64} height={64} style={{ objectFit: 'cover' }} />
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-capitalize">{t.position}</Card.Text>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text>{t.body}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0">
                <div className="d-flex gap-2 justify-content-center">
                  <Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faFacebookF} /></Button>
                  <Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faTwitter} /></Button>
                  <Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faLinkedinIn} /></Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="outline-primary" size="lg">
          want to work with us?
          <b className="ms-2">we are hiring</b>
        </Button>
      </div>
    </div>
  );
}

export default Teams;
