import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';



const Navigationsa = () => {

    const scrollToHome = () => {
        const homeSection = document.getElementById('home-section');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    

   

    const navigate = useNavigate();

    const handleLogout = () => {
     
      localStorage.removeItem('token');
      
      navigate('/Login');
    };


    return (
        <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand href="/home" onClick={scrollToHome} className="brand">Kratus Photography</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="Toggle" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="/home" onClick={scrollToHome} className="list_item">Home</Nav.Link>
              
              
              
              
              <Nav.Link href="/bookus" className="list_item">Book Us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <button onClick={handleLogout} className="btn">Log Out</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigationsa;