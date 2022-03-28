import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Image404 from '../../assets/img/404.png';
import NavMenu from '../../shared/NavMenu';
import Footer from '../Footer';

function Error404Wrapper({ isMobile }) {
  return (
    <div>
      <NavMenu />
      <Container className="mt-5 py-3 py-md-5 text-center">
        <Image src={Image404} height={isMobile ? 200 : 400} className="my-3" />
        <p className="lead fw-normal">
          Oops! Looks like you followed a bad link.
          If you think this is a problem with us, please&nbsp;
          <Link to="/" variant="link" className="text-lowercase">tell us.</Link>
        </p>
        <Button href="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span className="ms-2">Go back home</span>
        </Button>
      </Container>
      <Footer />
    </div>
  );
}

export default Error404Wrapper;
