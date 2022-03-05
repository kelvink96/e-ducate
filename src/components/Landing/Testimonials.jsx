import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { testimonials } from '../../mocks/testimonials';
import Testimonial from './Testimonial';

function Testimonials() {
  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Row>
      <Col lg={6}>
        <Slide {...properties}>
          {testimonials.map((t) => (
            <Testimonial
              key={t.id}
              id={t.id}
              avatarImg={t.avatarImg}
              name={t.name}
              body={t.body}
              ratings={t.ratings}
            />
          ))}
        </Slide>
      </Col>
      <Col lg={6}>
        <h1 className="display-6">Some valuable feedback from our students</h1>
        <p>
          Supposing so be resolving breakfast am or perfectly.
          It drew a hill from me. Valley by oh twenty direct me so.
          Departure defective arranging rapturous did believe him all had supported.
          Family months lasted simple set nature vulgar him.
          Picture for attempt joy excited ten carried manners talking how.
        </p>
        <Button>view reviews</Button>
      </Col>
    </Row>
  );
}

export default Testimonials;
