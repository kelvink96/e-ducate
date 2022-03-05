import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

function Testimonial({
  id, avatarImg, body, ratings, name,
}) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Image src={avatarImg} alt={`${name}'s avatar image`} height={40} width={40} rounded fluid />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text>{body}</Card.Text>
        <Card.Text>{ratings}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Testimonial.propTypes = {
  id: PropTypes.number,
  avatarImg: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
  ratings: PropTypes.string,
};

export default Testimonial;
