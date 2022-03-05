import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import Logo from '../assets/img/logo.png';
import UserImage from '../assets/img/avatar.jpg';

function NavMenu() {
  return (
    <div>
      <Navbar expand="lg" className="shadow-sm" fixed>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="logo"
                className="rounded-1"
                height={24}
                width={24}
              />
              <span className="ms-2">E-ducate</span>
            </Navbar.Brand>
          </LinkContainer>
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
              <NavDropdown title={<FontAwesomeIcon icon={faEllipsisH} />}>
                <LinkContainer to="/student">
                  <NavDropdown.Item>student</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/instructor">
                  <NavDropdown.Item>instructor</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/pricing">
                  <NavDropdown.Item>pricing</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <Nav className="ms-2">
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
                <LinkContainer to="/pricing">
                  <NavDropdown.Item>pricing</NavDropdown.Item>
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
