import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Imagen1 from '../../assets/img/logo.png';


function NavbarApp() {
  return (
    <Navbar bg="light" expand="lg" variant="light" className="nav">
      <Container>
        <Navbar.Brand  href="#"><img src={Imagen1} width="80"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link m-2" to="/"><strong>Characters</strong></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;