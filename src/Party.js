import React, { useState } from 'react';
import Navigations from './Components/TopNavs'



const Party = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
    <Navigations/>
    <section>
      <div className="hero9">
      <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/ZYRAHvl8pCGMoaS8Cl"
          width="100%"
          height="100%"
          style={{ position: 'absolute', pointerEvents: 'none' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      </div>


      <div className="overlay1">
        <div className="text-box">
          <h2>Celebrate with us!</h2>
        </div>


        <div className="text-box2">
          <button>Join the fun</button>
        </div>


        <div className="text-box1">
          <p>Capture the moments, share the joy. Join us at the Birthday Photobooth for unforgettable memories.</p>
        </div>


        
      </div>


      <section>
        <div className="glam-booth-container">
        <h2>Capture the Fun</h2>
          <div className="text-container1">
           
            <p>
            At Memorable Photobooth Moments, we believe in capturing the fun and excitement of birthdays through our innovative photobooth experiences. Our goal is to create lasting memories that you and your guests will cherish for years to come.
            With customizable packages and personalized touches, our photobooths are designed to elevate your birthday celebration. Let us help you create an unforgettable experience that reflects your unique style and personality.
            Get ready to strike a pose, grab a prop, and capture the joy of your special day with Memorable Photobooth Moments.
            </p>
          </div>
          <div className="image-container12">
            <img src="https://cdn0.weddingwire.com/vendor/022621/3_2/1280/jpg/1433556273873-shutterbooth13.jpeg"/>
          </div>
        </div>
      </section>


      <section>
       <div className="thirdsec">
        <div className="bok">


          <p>Don't miss out on the fun! Book our photobooth for your birthday celebration and create memories that will last a lifetime...</p>
          </div>
         
       
        </div>
       
      {/* Fourth section: Four Cards */}
      <section className="fourthsec">
        {/* First Card */}
        <div className="card9">
          <img src="https://i.etsystatic.com/21404620/r/il/513b8a/3561790755/il_300x300.3561790755_6xrn.jpg" alt="Card 1" />
          <h3>1st Birthday</h3>
          <p>Capture and celebrate the joy of our little one's first birthday with our interactive photobooth experience. Our photobooth is designed to create lasting memories and add an extra element of fun to the celebration.
           </p>
        </div>


        {/* Second Card */}
        <div className="card9">
          <img src="https://m.media-amazon.com/images/I/71PyT4MsjaL.jpg" alt="Card 2" />
          <h3>18th Debut </h3>
          <p>Celebrate the milestone of turning 18 in style with our exclusive photobooth experience. Our photobooth is designed to add glamour, fun, and a touch of elegance to your debut celebration.</p>
        </div>


        {/* Third Card */}
        <div className="card9">
          <img src="https://m.media-amazon.com/images/I/715puO9hf4L._AC_UF1000,1000_QL80_.jpg" alt="Card 3" />
          <h3>60th Birthday </h3>
          <p>Celebrate 60 remarkable years with our exclusive photobooth experience. As we honor and cherish the incredible journey of six decades. Every photo is a unique reflection of a life filled with laughter, love, and legacy.</p>
        </div>


        {/* Fourth Card */}
        <div className="card9">
          <img src="https://static.vecteezy.com/system/resources/previews/000/237/092/original/vector-party-people-dancing.jpg" alt="Card 4" />
          <h3>Customized Party </h3>
          <p>Elevate your celebration with our tailored photobooth experiences. From custom props to personalized backgrounds, we bring your unique style to every snapshot, making your moments truly one-of-a-kind</p>
        </div>
   


       
        <div className="button2">
          <button>Get Qoute</button>
          </div>
      </section>
     
   


      </section>


        {/* fifth sec */}
        <section>
        <div className="fiftsec">
          <div className="fift">
            <h1>Step into our world of creativity and capture memories that last a lifetime.</h1>
          </div>
 
        </div>
       </section>


           
     {/* Modal */}
     {isModalOpen && (
        <div id="myModal" className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" id="modalImg" src={selectedImage} alt="Selected" />
        </div>
      )}


        {/* Sixth sec Card */}
    <section className="cards-container9">
        <div className="cards8" onClick={() => openModal('image1.jpg')}>
   


          <img src="https://www.dcmomentsphotobooth.com/wp-content/uploads/2019/03/march-3-lala.jpg" alt="Cards 1" />
        </div>


        <div className="cards8" onClick={() => openModal('image2.jpg')}>
          <img src="https://photoboothbypixeldust.weebly.com/uploads/1/0/2/2/102217414/photobooth-in-marikina-unicorn-theme-first-birthday-36_orig.jpg" alt="Cards 2" />
        </div>


        <div className="cards8" onClick={() => openModal('image3.jpg')}>
          <img src="https://www.poseandprint.com/wp-content/uploads/2017/09/angela18_20170917_c3eventsplace.jpg" alt="Cards 3" />
        </div>


        <div className="cards8" onClick={() => openModal('image4.jpg')}>
          <img src="https://xpressbooth.ca/wp-content/uploads/2014/10/25th_silver_wedding_18th_birthday_debut_photo_booth-0009-800x537.jpg" alt="Cards 4" />
        </div>


        <div className="cards8" onClick={() => openModal('image5.jpg')}>
          <img src="https://www.localnjphotobooths.com/uploads/8/3/4/1/83419114/000000p_orig.jpg" alt="Cards 5" />
        </div>


        <div className="cards8" onClick={() => openModal('image6.jpg')}>
          <img src="https://images.squarespace-cdn.com/content/v1/551c7154e4b0cf5ef58b36f9/1431363948639-HJIFZJXY1MVI51SVUDRM/PHOTOBOOTH+PORTFOLIO-27.jpg" alt="Cards 6" />
        </div>
      </section>


     
   
    {/* seven sec */}
      <div class="memory-box">
       
           <div class="button-container20">
           <p>Ready to create memories?</p>
          <button class="button8">Get in touch</button>
           </div>


      </div>
    </section>
    </>
  );
};


export default Party;