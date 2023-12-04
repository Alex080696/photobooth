import React from 'react'
import Navigation from './Components/TopNav';
import Footer from './Components/Footer';
import cam1 from './img/cam1.png'
import ContactUs from './ContactUs';
import Carousel from 'react-bootstrap/Carousel';
import dd from './img/ddddd.jpg'
import oo from './img/oo.jpg'
import bb from './img/bb.png'

export default function LandingPage() {
  return (
    <>
    
    <Navigation/>
    <div>
          
          <Carousel>
    <Carousel.Item>
      <img style={{height:'100vh', width:'100%'}}
          classname="d-block w-100"
          src={cam1}
          alt="First Slide"
      />
      <Carousel.Caption>
        <h3 className="ey">Kratus Photography</h3>
        <h3 className="eyy">Events & Photobooth Services</h3>
        <p className="a">Pleases Log In to see our offers.</p>
        
      </Carousel.Caption>     
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'100vh', width:'100%'}}
          classname="d-block w-100"
          src={dd}
          alt="Second Slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'100vh', width:'100%'}}
          classname="d-block w-100"
          src={oo}
          alt="Third Slide"
      />
      <Carousel.Caption>
     
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'100vh', width:'100%'}}
          classname="d-block w-100"
          src={bb}
          alt="Fourth Slide"
      />
      <Carousel.Caption>
      
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
      <section id="contact-section">
    <ContactUs/>
    </section>
    <Footer/>
    </>
    
  )
}
