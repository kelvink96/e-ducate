import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Stats() {
  return (
    <Row className="mb-5 pb-5 text-center">
      <Col>
        <h1 className="display-6 fw-bold">5</h1>
        <p>in business</p>
      </Col>
      <Col>
        <h1 className="display-6 fw-bold">45K</h1>
        <p>registered users</p>
      </Col>
      <Col>
        <h1 className="display-6 fw-bold">91%</h1>
        <p>happy customers</p>
      </Col>
    </Row>
  );
}

export default Stats;
