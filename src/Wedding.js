import React, { useEffect, useState } from 'react';
import './wedding.css';
import Navigationsa from './Components/TopN';
import lisa from './img/liss.gif'
import artur from './img/art.gif'
import harley from './img/wdance.gif'
import wes from './img/wes.png'
import ewa from './img/ewaa.jpg'
import er from './img/er.jpg'
import ar from './img/ar.jpg'
import aer from './img/aer.jpg'
import aass from './img/aass.jpeg'
import { Link } from "react-router-dom";





const Wedding = () => {
  const [isVideoSectionInView, setVideoSectionInView] = useState(false);
  const [currentComment, setCurrentComment] = useState(0);


  const positiveReviews = [
    "We had the best experience with the photo booth at our wedding! The pictures turned out amazing, and our guests had so much fun. It's a fantastic way to capture memories.- David R.",
    "We had the most incredible experience with the photo booth at our wedding! The pictures turned out amazing, and our guests had so much fun. The props were a hit, and the attendants were friendly and professional. It added a whole new level of entertainment to our special day. Highly recommend!- Lisa & Denato",
    "The photo booth was a highlight of our wedding! It captured so many memorable moments that we'll cherish forever. The prints were of great quality, and our guests enjoyed the variety of props. The photo booth attendants were fantastic and made the entire process seamless. Thank you for adding an extra layer of joy to our celebration!- Hailey & Fadi",
    "Opting for a photo booth was hands down the best decision we made for our wedding. It brought out the playful side of our guests, and everyone left with a keepsake from the day. The customization options for the prints were a nice touch, and the entire setup was elegant. A big thank you to the team for making our wedding even more special!- Emilie & Simon"
  ];


  useEffect(() => {
    const handleScroll = () => {
     
     
     
    };


    const commentInterval = setInterval(() => {
      setCurrentComment((prevComment) => (prevComment + 1) % positiveReviews.length);
    }, 5000);


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(commentInterval);
    };
  }, []);
 
  return (
    <>
       <Navigationsa/>
      <section>
        {isVideoSectionInView ? null : (
          <div className="box">
            <p className="aey">World Renowned</p>
            <h1>PHOTO BOOTH</h1>
            <h3>Experience a fusion of elegance where unforgettable memories meet cherished souvenirs and elevated entertainment.</h3>
          </div>
        )}
      </section>


      <section className="as-seen-in">
        <h2>AS SEEN IN</h2>
        <div className="as-seen-container">
          <div className="as-seen-in-content"></div>
          <div className="as-seen-in-content1"></div>
        </div>
      </section>


     
   


     
      <section className="image-and-text-section">
   
          <div className="text-content">
            <h2>GALLERIES</h2>
            <p>
          Our priority is to give you albums filled with memories of your friends and family
          <br />
          and to give your guests a wedding favor they will cherish forever.
        </p>
          </div>
     
      </section>


  <section className="image-row">
  <div className="card">
    <img src={lisa} alt="" />
    <div className="text-content1">
      <h4>Lisa & Denato</h4>
      <p>PRO PHOTO BOOTH</p>
    </div>
  </div>


  <div className="card">
    <img src={artur} alt="" />
    <div className="text-content1">
      <h4>Emilie & Simon</h4>
      <p>PRO GLAM BOOTH</p>
    </div>
  </div>


  <div className="card">
  <img src={harley} alt="" />
    <div className="text-content1">
      <h4>Hailey & Fadi</h4>
      <p>360 CINE BOOTH</p>
    </div>
  </div>
</section>
   
   


<section className="booknowsec">
        <div className="image-with-text">
          <img src={aass} alt="Image" />
          <div className="image-text-content">
            <h2>LET’S CHAT ABOUT THE BEST PHOTO BOOTH FOR THE WEDDING YOU ARE PLANNING</h2>
            <p>Book a FREE consultation session and let’s chat!</p>
            <Link to="/bookus" className="btn">BOOK US</Link>
          </div>
        </div>
      </section>




 
      <section>
        <div className="Icons">
          <div className='Iconstext'>
            <h3>Services</h3>


            <div className="text-content4 col-md-3 "  />
            <img src={wes} alt="360" />
            <h4 className="awe">360 CINE BOOTH</h4>


            <div className="text-content5 col-md-3 " />
            <img src={ewa} alt="Green" />
            <h4 className="awe">GREEN SCREEN</h4>


            <div className="text-content6 col-md-3 " />
            <img src={er} alt="Light" />
            <h4 className="awe">LIGHT PAINTING</h4>


            <div className="text-content7 col-md-3 " />
            <img src={ar} alt="Mirror" />
            <h4 className="awe">MAGIC PHOTO MIRROR</h4>


            <div className="text-content8 col-md-3 " />
            <img src={aer} alt="Walk" />
            <h4 className="awe">WALK-IN PHOTOBOOTH</h4>
          </div>
        </div>
      </section>


     
      <section className="comments-section">
  <div className="text-content9">
    <h2>WHAT PEOPLE ARE SAYING</h2>
  </div>
  <div className="comment-container">
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className={`comment-item ${index === currentComment ? 'active' : ''}`}
      >
        <p>{positiveReviews[currentComment]}</p>
      </div>
    ))}
  </div>
</section>


     <section className="quote-section">
      <div className="quote-text">
        <h2>Go Ahead...</h2>
        <p>You don't have to pay now! This will only tentatively hold a photo booth for you on your selected date.</p>
      </div>
      <div className="quote-button">
        <Link to="/bookus" className="btn">GET A QUOTE NOW</Link>
      </div>
    </section>

    


    </>
  );
};


export default Wedding;


