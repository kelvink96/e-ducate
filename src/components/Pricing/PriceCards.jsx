import React from 'react';
import {
  Badge, Button,
  Card, Col, ListGroup, ListGroupItem,
} from 'react-bootstrap';

function PriceCards({
  price, type, features, description, preferred,
}) {
  return (
    <Col>
      <Card className={`h-100 text-center ${preferred && 'bg-secondary'}`}>
        <Card.Body>
          <Badge className={`fs-4 mb-3 rounded-3 fw-normal ${preferred ? 'text-black' : 'text-white'}`} bg={`${preferred ? 'secondary' : 'primary'}`}>{type}</Badge>
          <hr />
          <Card.Title><h3>{price}</h3></Card.Title>
          <Card.Text>{description}</Card.Text>
          <hr />
          <Card.Title><h5>features</h5></Card.Title>
          <ListGroup className={`list-group-flush ${preferred && 'bg-primary text-white'}`}>
            {features.map((f) => <ListGroupItem className={`${preferred && 'bg-secondary'}`}>{f}</ListGroupItem>)}
          </ListGroup>
          <Button className="my-3" variant="primary">try free for 30 days</Button>
          <Card.Text className="small">no card required</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PriceCards;
