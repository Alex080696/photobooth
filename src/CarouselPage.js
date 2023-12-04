import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import dd from './img/ddddd.jpg'
import oo from './img/oo.jpg'
import bb from './img/bb.png'
import cam1 from './img/cam1.png'

function CarouselPage() {
    return(
        <div>
          
            <Carousel>
      <Carousel.Item>
        <img style={{height:'93vh', width:'100%'}}
            classname="d-block w-100"
            src={cam1}
            alt="First Slide"
        />
        <Carousel.Caption>
          <h3 className="ey">Kratus Photography</h3>
          <h3 className="eyy">Events & Photobooth Services</h3>
          <p className="a">Memories are always precious, <br></br>they are memories which will stay,<br></br> 
          and even though the time goes by,<br></br> they will never be taken away. - <i>Susan Smith</i></p>
          
        </Carousel.Caption>     
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'93vh', width:'100%'}}
            classname="d-block w-100"
            src={dd}
            alt="Second Slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'93vh', width:'100%'}}
            classname="d-block w-100"
            src={oo}
            alt="Third Slide"
        />
        <Carousel.Caption>
       
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'93vh', width:'100%'}}
            classname="d-block w-100"
            src={bb}
            alt="Fourth Slide"
        />
        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default CarouselPage;