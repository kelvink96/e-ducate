import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Stats() {
  return (
    <Row>
      <Col>
        <h1>5</h1>
        <p>in business</p>
      </Col>
      <Col>
        <h1>45K</h1>
        <p>registered users</p>
      </Col>
      <Col>
        <h1>91%</h1>
        <p>happy customers</p>
      </Col>
    </Row>
  );
}

export default Stats;
