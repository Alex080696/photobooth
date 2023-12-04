import React from 'react'
import Navigations from './Components/TopNavs'
import Footer1 from './Components/Footer1';
import { Carousel } from 'react-bootstrap';
import CarouselPage from './CarouselPage';
import Events from './Events';

function Home() {
  return (
    <>
    <Navigations />
    
    <section id="home-section">
        <CarouselPage />
      </section>
      <section id="event-section">
      <Events/>
      </section>
      
      <Footer1/>
    </>
  );
};

export default Home;
