import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../../mocks/faqs';

function Faqs() {
  return (
    <div>
      <h2>Frequently asked questions</h2>
      <p>Perceived end knowledge certainly day sweetness why cordially</p>
      <Row>
        {faqs.map((f) => (
          <Col key={`faq-${f.id}`} sm={12} md={6}>
            <h5>{f.title}</h5>
            <p>{f.description}</p>
          </Col>
        ))}
      </Row>
      <div>
        <p>Still have questions?</p>
        <Button variant="link">
          Contact our friendly support team
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
}

export default Faqs;
