import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Description() {
  return (
    <Row>
      <Col><h2>Tools should adapt to the user, not the other way around.</h2></Col>
      <Col>
        <p>
          {`Since 2007, we have helped 25 companies launch over 1k incredible products.
              We believe the best digital solutions are built at the intersection of
              business strategy, available technology, and real user's needs.`}
        </p>
        <p>
          {`Things can get really complex, really quickly, and a pragmatic, synthetic
              and clear vision is essential to be able to create something that,
              after all, is meant to be used. Emotions also have a big role to play
              and developing clear and beautiful aesthetics is of the utmost importance
              to create a pleasant environment in which the user actually enjoys the time
              spent in it. In the end, we're all suckers for beautiful things that just work`}
        </p>
      </Col>
    </Row>
  );
}

export default Description;
