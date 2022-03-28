import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Testimonial({
  avatarImg, body, ratings, name,
}) {
  return (
    <Card className="h-100 mx-0 mx-md-3">
      <Card.Body>
        <Image
          src={avatarImg}
          alt={`${name}'s avatar image`}
          height={60}
          width={60}
          rounded
          style={{ objectFit: 'contain' }}
          className="mb-3"
        />
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p className="mb-0 ms-3">{body}</p>
          <FontAwesomeIcon icon={faQuoteRight} />
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faStar} />
          <span className="ms-1">{ratings}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Testimonial.propTypes = {
  avatarImg: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
  ratings: PropTypes.string,
};

export default Testimonial;
