import React from 'react';
import {
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCog, faDoorOpen, faQuestionCircle, faUser,
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import Logo from '../assets/img/logo.png';
import UserImage from '../assets/img/avatar.jpg';

function NavMenu() {
  return (
    <div>
      <Navbar expand="lg" className="shadow-sm bg-white" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="logo"
              height={32}
              width={32}
            />
            <span className="ms-3 text-primary fw-bold">E-ducate</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-menu" />
          <Navbar.Collapse id="nav-menu">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link>home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link>about us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/courses">
                <Nav.Link>courses</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link>pricing</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <Nav className="ms-2">
              <Nav.Link href="/notifications" className="mx-2">
                <FontAwesomeIcon icon={faBell} style={{ verticalAlign: 'bottom' }} />
              </Nav.Link>
              <NavDropdown
                title={(
                  <img
                    src={UserImage}
                    alt="profile avatar"
                    className="rounded-circle"
                    height={36}
                    width={36}
                  />
                )}
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    <FontAwesomeIcon className="me-2" icon={faUser} />
                    my profile
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/account">
                  <NavDropdown.Item>
                    <FontAwesomeIcon className="me-2" icon={faCog} />
                    account + billing
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavDropdown.Item>
                    <FontAwesomeIcon className="me-2" icon={faQuestionCircle} />
                    help center
                  </NavDropdown.Item>
                </LinkContainer>
                <Dropdown.Divider />
                <LinkContainer to="/login">
                  <NavDropdown.Item>
                    <FontAwesomeIcon className="me-2" icon={faDoorOpen} />
                    logout
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;
