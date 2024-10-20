import { useState, useEffect } from 'react';


const Slider = ({ cardData }, children) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // Update the number of slides based on screen size
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-play every 3 seconds
    return () => clearInterval(autoplay);
  }, []);

  return (
    {children}
  );
};

export default Slider;
