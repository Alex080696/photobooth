import React, { useEffect } from 'react';
import Navigationsa from './Components/TopN'
import './Corporate.css';
import { useNavigate } from 'react-router-dom';



const Corporate = () => {
    useEffect(() => {
   
        const imageSection = document.querySelector('.image-section');
        imageSection.classList.add('move-left');
    
    
     
        return () => {
          imageSection.classList.remove('move-left');
        };
      }, []);
    
      const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use history.push to navigate to the desired page
    navigate('/bookus');
  };


  return (
    <>
    <Navigationsa/>
    <div>
      {/* First section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Party Photobooth Experience</h1>
          <p>Capture the Moments, Create Memories</p>
          <button onClick={handleButtonClick}>Book Now</button>
        </div>
        <img
          className="hero-image"
          src="https://images.squarespace-cdn.com/content/v1/576c1f006b8f5bf5e63f34cc/1494608381218-4RD8N1HM5SW0XRYYC7A5/image-asset.jpeg"
          alt="Photobooth Corporate"
        />
      </section>


      {/* Second section */}
      <section className="content-section">
        <div className="content-text">
          <h2>Augmented Reality Photo Booths</h2>
          <p>This is a photo booth trend that is really starting to take off. Augmented reality photo booths allow attendees to take photos which also take advantage of state-of-the-art augmented reality technology
            . The virtual world can be anything you want, from steampunk to futurist..</p>
            <p>It's great for conferences where technology or the future is at the forefront. It is also ideal for businesses that want
               to promote a product or service that is not yet available and wants to showcase it in a unique way.</p>
        </div>
        <div className="content-image">
          <img
            src="https://outsnapped.com/wp-content/uploads/2022/06/Augmented-Reality-Photo-Booth-Filters-27109-1-768x638.png"
            alt="Description of the image"
          />
        </div>
      </section>


      {/* third section */}
      <section className="content-section1">
      <div className="content-image1">
          <img
            src="https://outsnapped.com/wp-content/uploads/2022/06/Green-Screen-Photo-Booth-Trend-27109-2-768x680.png"
            alt="Description of the image"
          />
        </div>
       
        <div className="content-text1">
          <h2>Green Screen Photo Booths</h2>
          <p>Green screen photo booths are perfect for businesses that want to get creative with their photos. With a green screen, you can take photos in front of any background imaginable. Think under the sea,
             on top of Everest, the possibilities are endless!</p>
            <p>This is a great trend for an event that's aspirational and wants to push the boundaries. With people being unable to travel for the past couple of years due to the pandemic,
              this is a great alternative. And not to mention, a lot of fun!</p>
              <p>You can even get appropriate props such as snorkels, hiking poles, or safari hats depending on your green screen.
                It's a fun and interactive way to go traveling, without having to even get on a plane.</p>
        </div>
   
      </section>


       {/* fourth section */}
       <section className="content-section2">
       
        <div className="content-text2">
          <h2>A Glam Booths</h2>
          <p>Made popular by the Kardashians, a glam booth uses expert lighting and cameras to make all of the images look incredibly professional. It makes everyone look their best and adds that touch of luxury to any event.</p>
            <p>They can come with built-in filters and produce flattering black-and-white
               images where everyone in the picture shines equally.</p>
              <p>If you want a photo booth that caters to an upper echelon
                 of clientele, this should be a great choice!</p>
        </div>


        <div className="content-image2">
          <img
            src="https://outsnapped.com/wp-content/uploads/2022/06/Glam-Booth-Photo-Booth-Trend-27109-3-1-768x632.png"
            alt="Description of the image"
          />
        </div>
   
      </section>


      {/* fifth section */}
      <section className="content-section3">
      <div className="content-image3">
          <img
            src="https://outsnapped.com/wp-content/uploads/2022/06/360-Photo-Booth-Rental-27109-6-768x683.png"
            alt="Description of the image"
          />
        </div>
       
        <div className="content-text3">
          <h2>360 Video Booths</h2>
          <p>A 360 video booth is a photo booth with the music dialed way up! With a
             360 camera, you can take panoramic photos or videos of your guests as they pose in the photo booth.</p>
            <p>It's perfect for businesses that want to capture their event in a unique way and create some fun content. Guests can even
               share their photos and videos on social media, giving your event even more exposure.</p>
              <p>It can be a bit disorienting at first, but a 360 video booth is the freshest photo booth on the market right now. It can help to have
                 a director on hand to move your guests into the right positions to capture the best footage.</p>
                 <p>If you want to be ahead of the curve, a 360 video booth is definitely the way to go.</p>
        </div>
   
      </section>
   


     {/* sixth section */}
              <section className="content-section4">
              <div className="content-text4">
                <h3>TAKE A LOOK AT OUR LATEST POSTS</h3>
                   <p>CLICK<span className="circle1"></span></p>
                    <p>CAPTURE<span className="circle2"></span></p>
                      <p>CONNECT<span className="circle3"></span></p>
                      </div>
                    </section>




       
                   
      {/* Seventh section */}
 
      <section className="image-section">
  <div className="image-containerss">
    <div className="image short-image">
      <img
        src="https://img1.wsimg.com/isteam/ip/ed081f0f-0cc7-4e1e-9d6a-1c2116632dd4/fre.jpg/:/"
        alt="Short Image"
        className="image"
      />
    </div>


    <div className="image long-image">
      <img
        src="https://neworleansphotoboothcompany.com/wp-content/uploads/2018/10/New-Orleans-Photo-Booth-Company-Corporate-3-e1550170442122.png"
        alt="Long Image"
        className="image"
      />
    </div>


    <div className="image big-image">
      <img
        src="https://poplifephotobooth.com/wp-content/uploads/2020/07/Photo-Booth-Corporate-Rental-img_0016.jpg"
        alt="Big Image"
        className="image"
      />
    </div>


    <div className="image medium-image">
      <img
        src="https://www.cloudbooth.com.sg/wp-content/uploads/2018/01/singapore-photobooth-corporate.jpg"
        alt="Medium Image"
        className="image"
      />
    </div>


    <div className="image extra-image">
      <img
        src="https://professionalphotobooth.com/wp-content/uploads/2023/04/professional-photo-booth-corporate-event-success.jpeg"
        alt="Extra Image"
        className="image"
      />
    </div>


    <div className="image super-image">
      <img
        src="https://www.tickledphotobooth.com/wp-content/uploads/2017/07/BizBash-Hall-of-Fame-Jason-Dixson-Photography-190726-1723.jpg"
        alt="Super Image"
        className="image"
      />
    </div>
   
    <div className="image superx-image">
      <img
        src="https://images.squarespace-cdn.com/content/v1/61b98feb43871b2d32867e94/010bd993-62d4-4a30-81bd-ec59071d4e07/360+video+booth+los+angeles.jpg"
        alt="Superx Image"
        className="image"
      />
    </div>


    <div className="image superxl-image">
      <img
        src="https://i.pinimg.com/736x/1e/fe/d8/1efed8f30a398209be8b1876dd8a7c73.jpg"
        alt="Superxl Image"
        className="image"
      />
    </div>
   
  </div>
</section>


{/* Eighth section */}
           <section className="contact-section">
             <div className="contact-box">
                <h2>What are you waiting for?</h2>
                     <p>Contact us now to book your Corporate Events photo booth experience!</p>
           
                   <div className="get-in-touch">
                   <button onClick={handleButtonClick}>Get in Touch</button>
                            </div>
                            </div>
          </section>










    </div>
  

    </>
  );
};


export default Corporate;
