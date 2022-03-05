import React from 'react';
import {
  Button,
  Col, Container, Dropdown, Image, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAppStore,
  faFacebookF, faGooglePlay, faInstagram, faLinkedinIn, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../assets/img/logo.png';
import './styles.scss';

function Footer() {
  return (
    <div className="bg-dark p-5 text-white footer">
      <Container>
        <Row>
          <Col>
            <div className="d-flex align-items-center gap-3 mb-3">
              <Image src={LogoImg} height={50} />
              <h4>e-ducate</h4>
            </div>
            <p className="mt-3">
              E-ducate education theme, built specifically for the education centers
              which is dedicated to teaching and involve learners.
            </p>
            <div className="d-flex gap-2">
              <Button variant="secondary" href="" title="Facebook" className="shadow"><FontAwesomeIcon icon={faFacebookF} /></Button>
              <Button variant="secondary" href="" title="Twitter" className="shadow"><FontAwesomeIcon icon={faTwitter} /></Button>
              <Button variant="secondary" href="" title="Instagram" className="shadow"><FontAwesomeIcon icon={faInstagram} /></Button>
              <Button variant="secondary" href="" title="LinkedIn" className="shadow"><FontAwesomeIcon icon={faLinkedinIn} /></Button>
              <Button variant="secondary" href="" title="YouTube" className="shadow"><FontAwesomeIcon icon={faYoutube} /></Button>
            </div>
          </Col>
          <Col>
            <h4 className="mb-3">company</h4>
            <div className="d-flex flex-column gap-2">
              <Link to="/#">about us</Link>
              <Link to="/#">contact us</Link>
              <Link to="/#">blogs</Link>
              <Link to="/#">library</Link>
              <Link to="/#">career</Link>
            </div>
          </Col>
          <Col>
            <h4 className="mb-3">community</h4>
            <div className="d-flex flex-column gap-2">
              <Link to="/#">documentation</Link>
              <Link to="/#">contact us</Link>
              <Link to="/#">blogs</Link>
              <Link to="/#">library</Link>
              <Link to="/#">career</Link>
            </div>
          </Col>
          <Col>
            <h4 className="mb-3">contact</h4>
            <div className="d-flex flex-column gap-2">
              <p className="mb-0">toll free: +254-712-345-678</p>
              <p className="mb-0">email: example@abc.com</p>
              <div className="d-flex flex-column gap-2">
                <Button variant="secondary" className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faGooglePlay} />
                  <p className="mb-0 ms-2">get it on google play</p>
                </Button>
                <Button variant="secondary" className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faAppStore} />
                  <p className="mb-0 ms-2">get it on google play</p>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-3" />
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0">Copyrights ©2022 E-ducate. All rights reserved.</p>
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle variant="">
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">english</Dropdown.Item>
                <Dropdown.Item href="#/action-2">french</Dropdown.Item>
                <Dropdown.Item href="#/action-3">german</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="link">terms of service</Button>
            <Button variant="link">privacy policy</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
