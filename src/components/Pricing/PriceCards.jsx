import React from 'react';
import {
  Button,
  Card, Col, ListGroup, ListGroupItem,
} from 'react-bootstrap';

function PriceCards({
  price, type, features, description, preferred,
}) {
  return (
    <Col>
      <Card className={`h-100 text-center ${preferred && 'bg-primary text-white'}`}>
        <Card.Body>
          <h4 className="display-6 fw-normal text-capitalize mb-5">{type}</h4>
          <Card.Title><h3>{price}</h3></Card.Title>
          <Card.Text>{description}</Card.Text>
          <ListGroup className={`list-group-flush ${preferred && 'bg-primary text-white'}`}>
            {features.map((f) => <ListGroupItem className={`${preferred && 'bg-primary text-white'} text-capitalize`}>{f}</ListGroupItem>)}
          </ListGroup>
          <Button className="my-3" variant={preferred ? 'secondary' : 'primary'}>try free for 30 days</Button>
          <Card.Text className="small">no card required</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PriceCards;
