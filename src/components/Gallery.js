import React, { useState, useEffect } from 'react';
import '../index.css';
import Navigation from './Navigation';
import Footer from './Footer';

const ImageSlideshow = () => {
  // Array of image URLs
  const images = [
    "https://i.ibb.co/w48T7VY/home1.jpg",
    "https://i.ibb.co/2jw8WcB/home2.jpg",
    "https://i.ibb.co/fnvgnr1/home3.jpg",
    "https://i.ibb.co/fX3dMDq/home4.jpg",
    "https://i.ibb.co/2N4Gxvb/home5.jpg",
    "https://i.ibb.co/K6zZWWc/home6.jpg",
    "https://i.ibb.co/xSNpz75/home7.jpg",
    "https://i.ibb.co/98JP9fh/home8.jpg",
    "https://i.ibb.co/0QhfrdD/home9.jpg",
    "https://i.ibb.co/G0z7GtJ/home10.jpg",
    "https://i.ibb.co/T1q4gD7/home13.jpg",
    "https://i.ibb.co/Kx47w0g/home14.jpg",
    "https://i.ibb.co/ySzrg7K/home15.jpg",
    "https://i.ibb.co/xXdRvzB/home16.jpg",
    "https://i.ibb.co/nwCXf9X/home17.jpg",
    "https://i.ibb.co/VtGcjRB/borehole.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to handle the automatic slide change
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (3000 milliseconds)

    // Cleanup the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length]);

  return (
   
    <div className="slideshow-container">
  
<div>
<br></br>
<br></br>

       <Navigation/>
       <br></br>
<br></br>
       <p id="save"><b><u>Tunza Watoto Foundation Inc.</u></b></p>
       </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src={image} alt={`Slide ${index}`} className="image-slide" />
        </div>
      ))}
      <br></br>
<br></br>

      <Footer/>
    </div>
  );
};

export default ImageSlideshow;
