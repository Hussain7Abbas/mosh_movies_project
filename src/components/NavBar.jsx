import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class NavBar extends Component {
  state = {};

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to='movies'><Nav.Link >Movies</Nav.Link></LinkContainer>
            <LinkContainer to='about'><Nav.Link >About Us</Nav.Link></LinkContainer>
            <LinkContainer to='contact'><Nav.Link >Contact Us</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;