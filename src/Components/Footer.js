import React from 'react'
import styled from 'styled-components'
import { contactConfig } from '../content_option';

const Footer = () => {

    const scrollToEvents = () => {
        const eventsSection = document.getElementById('event-section'); // Corrected ID
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
  
    return (
      <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
      <div className="row">
        {/* Column 1*/}

        <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
                <li>Address: 1234 Main Road St. Manila City</li>
                <li>Phone: 09281530023 </li>
                <li> Email: <a href="#">Kp.info@gmail.com</a></li>
                <li> Facebook: <a href="#">Kratus Photography</a> </li>
                <li> Instagram: <a href="#">Kratus Photography</a> </li>
                <li> Twitter:      <a href="#">Kratus Photography</a> </li>
            </ul>
        </div>
            {/* Column 2*/}

        <div className="col-md-3 col-sm-6">
            <h4>Event</h4>
            <ul className="list-unstyled">
                <li><a href="./Login"> Wedding</a></li>
                <li><a href="./Login"> Parties</a></li>
                <li><a href="./Login"> Corporate</a></li>
                <li><a href="./Login"> Baptismal</a></li>
            </ul>
        </div>
        {/* Column 3*/}

        <div className="col-md-3 col-sm-6">
            <h4>Services</h4>
            <ul className="list-unstyled">
            <li><a href="./Login" onClick={scrollToEvents}>Photobooth</a></li>
            <li><a href="./Login" onClick={scrollToEvents}> 360 Booth</a></li>
            <li><a href="./Login" onClick={scrollToEvents}>Slowmo Booth</a></li>
            
            </ul>
        </div>
        {/* Column 4*/}

        <div className="col-md-3 col-sm-6">
            <h4>Kratus Photography</h4>
            <ul className="list-unstyled">
            <li>{contactConfig.description} </li>
            </ul>
        </div>
      </div>
        
        
        </div> 
        <div className="footer-bottom">
            <p className="text-xs-center"><center>&copy;{new Date().getFullYear()} City Guide App - All Rights Reserved</center></p>
        </div>
        </div>
      </FooterContainer>
    )
  }

  export default Footer;

  const FooterContainer = styled.footer`
    .footer-middle{
        background: var(--mainDark);
    }
  
  `;

