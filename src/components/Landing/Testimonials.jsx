import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { testimonials } from '../../mocks/testimonials';
import Testimonial from './Testimonial';

function Testimonials() {
  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
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
    <Row className="py-3 py-md-5 my-3 my-md-5">
      <Col xs={12} md={6} className="mb-3 text-center text-md-start">
        <h1 className="display-6 fw-bold">Some valuable feedback from our students</h1>
        <p>
          Supposing so be resolving breakfast am or perfectly.
          It drew a hill from me. Valley by oh twenty direct me so.
          Departure defective arranging rapturous did believe him all had supported.
          Family months lasted simple set nature vulgar him.
          Picture for attempt joy excited ten carried manners talking how.
        </p>
        <Button variant="outline-primary">view reviews</Button>
      </Col>
      <Col xs={12} md={6}>
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
    </Row>
  );
}

export default Testimonials;
