import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigationss = () => {

    
       
      
       


  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/LandingPage" className="brand">Kratus Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="Toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="./LandingPage" className="list_item">Home</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
            <div>
              <div>
                <Link to="/Login" className="btn">Login</Link>
                <Link to="/Signup" className="btn">Sign Up</Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationss;