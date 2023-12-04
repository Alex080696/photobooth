import React, { useEffect, useRef, useState } from 'react';
import Navigationsa from './Components/TopN'
import './Baptismal.css'
import { useNavigate } from 'react-router-dom';


const Baptismal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  };


  const leavesContainerRef = useRef(null);


  useEffect(() => {
    const leavesContainer = document.createElement('div');
    leavesContainer.className = 'leaves-container';
    document.body.appendChild(leavesContainer);
    leavesContainerRef.current = leavesContainer;


    function createLeaf() {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.style.left = Math.random() * window.innerWidth + 'px';
      leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
      leaf.innerHTML = '🍂';
      leavesContainer.appendChild(leaf);


      // Remove the leaf after the animation duration
      setTimeout(() => {
        leaf.remove();
      }, parseFloat(leaf.style.animationDuration) * 1000);
    }


    const leafInterval = setInterval(createLeaf, 1000);


    const handleScroll = () => {
      // Stop creating leaves when scrolling beyond the hero section
      if (window.scrollY > window.innerHeight) {
        clearInterval(leafInterval);
      }
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      clearInterval(leafInterval);
      window.removeEventListener('scroll', handleScroll);
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
      {/* First section */}
      <div className="hero-container1">
        <div className="content">
          <h1>Baptismal Photobooth Magic</h1>
          <p>Photobooth Baptismal experience to cherish forever, where precious moments and sacred celebrations converge in captivating frames of Faith and Joy...</p>
          <button onClick={handleButtonClick}>BOOK US</button>
        </div>
      </div>


      {/* Second section */}
      <div className="container1">
        <div className="image">
          <img
            src="https://www.paperlesspost.com/blog/wp-content/uploads/Blog_Baptism_03-inline.jpg"
            alt="Your Image Alt Text"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="text">
          <h2>Crafting Everlasting Memories</h2>
          <p>We believe in creating unforgettable memories. Our team is dedicated to providing a one-of-a-kind experience for you and your loved ones</p>
          <p>With state-of-the-art equipment and a passion for creativity, we ensure that every moment is captured beautifully.</p>
          <p>Join us in celebrating life's special moments with laughter, love, and a touch of magic.</p>
          <button onClick={handleButtonClick}>Learn More</button>
        </div>
      </div>


      {/* Third section */}
      <div className="container2">
        <div className="text2">
          <h3>Step into a world of joy and capture the precious moments of your baptismal experience with our immersive photobooth..</h3>
        </div>
      </div>


      {/* Fourth section */}
      {/* Modal */}
      {isModalOpen && (
        <div id="myModal" className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" id="modalImg" src={selectedImage} alt="Selected" />
        </div>
      )}
     


      <div className="cards-container1" id="#yeah">
      <div className="memories-heading">
        <h2>Magic Memories</h2>
      </div>


      <div className="cards-container1">
     
        <div className="cards1" onClick={() => openModal('image1.jpg')}>
          <img src="https://cdn.myportfolio.com/8fcc570c-ad09-4564-8da3-9dd11f9bb7ee/4aecd8ab-a380-4cae-bf42-f9973b4fc399_car_3x2.jpg?h=edce00ed308485240825771aa48e7a8f" alt="Cards 1" />
        </div>


        <div className="cards1" onClick={() => openModal('image2.jpg')}>
          <img src="https://images-ext-2.discordapp.net/external/4geZ8n_Gxz6QNOt-YXjy4VjVhHyD1xbsCnXpqYVoS7A/https/denverphotoboothrental.com/wp-content/uploads/2021/02/Inflatable-photobooth-for-weddings-1.jpg?format=webp&width=883&height=588" alt="Cards 2" />
        </div>


        <div className="cards1" onClick={() => openModal('image3.jpg')}>
          <img src="https://photoboothbypixeldust.weebly.com/uploads/1/0/2/2/102217414/baby-nianna-flowers-themed-baptism-tarp-photobooth-marikina-004.jpg" alt="Cards 3" />
        </div>


        <div className="cards1" onClick={() => openModal('image4.jpg')}>
          <img src="https://xpressbooth.ca/wp-content/uploads/2014/10/christening-photo-booth-brooks-ab-0001-800x537.jpg" alt="Cards 4" />
        </div>


        <div className="cards1" onClick={() => openModal('image5.jpg')}>
          <img src="https://yfranz.com/wp-content/uploads/2019/03/Matheus-Liam-Christening-1080x675.jpg" alt="Cards 5" />
        </div>


        <div className="cards1" onClick={() => openModal('image6.jpg')}>
          <img src="https://www.poseandprint.com/wp-content/uploads/2018/12/polly_20181213_jollibeebgc-photobooth-1080x675.jpg" alt="Cards 6" />
        </div>
     
        <div className="cards1" onClick={() => openModal('image7.jpg')}>
          <img src="https://photoboothbypixeldust.weebly.com/uploads/1/0/2/2/102217414/starwars-theme-photobooth-christening-marikina-3_orig.jpg" alt="Cards 6" />
        </div>


        <div className="cards1" onClick={() => openModal('image8.jpg')}>
          <img src="https://mommyanjexplores.files.wordpress.com/2015/08/photobooth.jpg" alt="Cards 6" />
        </div>


        <div className="cards1" onClick={() => openModal('image8.jpg')}>
          <img src="https://cdn2.mybenta.com/image/148835115237498602.jpg" alt="Cards 6" />
        </div>


        </div>


       
        </div>
       
      {/* Fifth section */}


      <div className="memo1">
          <h2>Our Services </h2>
        </div>


      <div className="cards-container2">
        <div className="cardss1">
          <div className="cards1" onClick={() => openModal('image1.jpg')}>
            <img src="https://static.tildacdn.com/tild3336-6636-4433-b630-356638633732/DSC_0628.JPG" alt="Card 1" />
          </div>
          <h3>Gallery Photobooth Rental</h3>
          <p>Perfect for gallery exhibitions, this package includes 3 hours of photobooth rental, themed props, and a dedicated attendant.</p>
        </div>


        <div className="cardss1">
          <div className="cards1" onClick={() => openModal('image2.jpg')}>
            <img src="https://images-ext-2.discordapp.net/external/4geZ8n_Gxz6QNOt-YXjy4VjVhHyD1xbsCnXpqYVoS7A/https/denverphotoboothrental.com/wp-content/uploads/2021/02/Inflatable-photobooth-for-weddings-1.jpg?format=webp&width=883&height=588" alt="Card 2" />
          </div>
          <h3>Baptismal Photobooth Package </h3>
          <p>Includes 2 hours of photobooth fun, unlimited prints, custom props, and digital copies of all photos.</p>
        </div>



        <div className="cardss1">
          <div className="cards1" onClick={() => openModal('image3.jpg')}>
            <img src="https://www.thefunexperts.co.uk/images/500x500/0x0-0x0/master-folder/website-images/main-products/magic-selfie-mirror-hire/photo-2019-01-18-13-44-44jpg.png?v=1613086692" alt="Card 3" />
          </div>
          <h3>Customized Packages </h3>
          <p>We also offer customized packages tailored to your specific needs. Get in touch with us to discuss your requirements.</p>
        </div>


     


      </div>
      <div className="buton1">
      <button onClick={handleButtonClick}>Get in touch</button>
      </div>


    </>
  );
};


export default Baptismal;
