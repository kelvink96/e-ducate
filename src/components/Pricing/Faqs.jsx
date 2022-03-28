import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../../mocks/faqs';

function Faqs() {
  return (
    <div className="py-3 py-md-5 my-3 my-md-5">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold">Frequently asked questions</h2>
        <p className="lead fw-normal">Perceived end knowledge certainly day sweetness why cordially</p>
      </div>
      <Row>
        {faqs.map((f) => (
          <Col key={`faq-${f.id}`} sm={12} md={6} className="mb-3">
            <Card className="h-100 border-0 text-center text-md-start">
              <Card.Body>
                <Card.Title>{f.title}</Card.Title>
                <Card.Text>{f.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <p className="mb-2">Still have questions?</p>
        <Button variant="outline-primary">
          Contact our friendly support team
          &nbsp;
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
}

export default Faqs;
