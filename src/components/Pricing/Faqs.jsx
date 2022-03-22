import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../../mocks/faqs';

function Faqs() {
  return (
    <div>
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold">Frequently asked questions</h2>
        <p>Perceived end knowledge certainly day sweetness why cordially</p>
      </div>
      <Row>
        {faqs.map((f) => (
          <Col key={`faq-${f.id}`} sm={12} md={6} className="mb-3">
            <h5>{f.title}</h5>
            <p>{f.description}</p>
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
