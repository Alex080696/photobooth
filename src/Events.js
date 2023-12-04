import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import wedding from './img/wds.gif'
import parties from './img/prt.gif'
import bap from './img/bap.gif'
import corporate from './img/corporate.jpg'
import christening from './img/christening.jpg'
import photobooth from './img/photobooth.gif'
import around from './img/around.gif'
import slowmo from './img/slowmo.gif'
import ContactUs from './ContactUs';

function Events() {
  
    return (
        <>
        <div className="bgg" id="#events">
        <h1 className="services text-center "><u>Services</u></h1>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photobooth} alt="Photobooth" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>Photobooth</Card.Title>
          <Card.Text>
          Elevate your event with our engaging and entertaining photo booth services. moments, create lasting memories, and add a touch of fun to any occasion. From weddings and parties
        to corporate events, our photo booth services are customizable to suit your unique event needs.     
          </Card.Text>
          
        </Card.Body>
      </Card>
      </div>
      <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={around} alt="360" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>360 booth</Card.Title>
          <Card.Text>
          Elevate your event with the unparalleled experience of a 360 photo booth. Perfect for weddings, corporate events,
        and brand activations, our 360 booths redefine event photography. Contact us today to bring this innovative
        photo booth experience to your upcoming event.
          </Card.Text>
          
        </Card.Body>
      </Card>
      </div>
      <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={slowmo} alt="Slowmo" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>slowmo booth</Card.Title>
          <Card.Text>
          Enhance the slow-motion and add a touch of cinematic magic to your event with our Slow Motion Photo Booth services. Capture every moment
        in stunning detail, slow down the action, and create memorable, entertaining content that will be shared and
        cherished long after the event ends.
          </Card.Text>
         
        </Card.Body>
      </Card>
      </div>
      </div>
       </div>
        <h1 className="events text-center "><u>Events</u></h1>
        <div className="container">
        <div className="row justify-content-center align-items-center">
                <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={wedding} alt="Wedding" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>Wedding</Card.Title>
          <Card.Text>
          Your love story deserves to be told through breathtaking images. Are wedding photography services are dedicated to capturing the essence,
          emotions, and beauty of your special day. Trust us to document the moments that make your wedding a unique and cherish experience.     
          </Card.Text>
          
          <Button href='wedding' variant="primary" >See Details</Button>
         
        </Card.Body>
      </Card>
      </div>
      <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={parties} alt="Parties" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>Parties</Card.Title>
          <Card.Text>
          Celebrate another year of life with vibrant and fun birthday party photography. Our photographer know how to capture excitement,
          surprise, joy of celebrating birthday, corporate events, and many more, ensuring you have memories to look back on and share with your friends and family. <br/> 
          </Card.Text>
         
          <Button href='/corporate' variant="primary" >See Details</Button>
          
        </Card.Body>
      </Card>
      </div>
      <div className="cardsss col-md-3 ">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bap} alt="Wedding" style={{ height: '215px' }}/>
        <Card.Body className="card-container">
          <Card.Title>Baptismal</Card.Title>
          <Card.Text>
          Preserve the sacred and joyus moment of your child`s` Christening with our professional photography services.
          Our experienced photographers understand the significance of this special occations and are dedicated to capturing
          timeless and heartfelt images for you and you family.
          </Card.Text>
          
          <Button href='baptismal' variant="primary" >See Details</Button>
        
        </Card.Body>
      </Card>
      </div>
            </div>
      </div>
      <br/>
      <br/>
      </div>
      

      
<br/>
<br/>

        <ContactUs/>
      
      </>
    )
  
}

export default Events
