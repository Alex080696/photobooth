import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";




const Navigation = () => {

  const scrollToContactUs = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
        <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="brand">Kratus Photography</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="Toggle" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="./LandingPage" className="list_item">Home</Nav.Link>
              
              <Nav.Link href="#contact1" onClick={scrollToContactUs} className="list_item">Contact us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div>
              <div>
                 <Link to="/Login" className="btn" >Login</Link>
                 <Link to="/Signup" className="btn" >Sign Up</Link>
                 
            </div>

            

                </div>
                
                
                  
                   
                  
                
                
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
};

export default Navigation;