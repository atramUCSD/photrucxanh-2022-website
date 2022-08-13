import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import '../App.css';



const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <React.Fragment> 
    <section className='header'> 
      <h1> Welcome to the new Phở Trúc Xanh Website! </h1> 
    </section>
    <section className='slider'>
      <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className="background">
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img id = "slide-element" src={slide.image} alt='test' className='image' />
            )}
          </div>
          </div>
        );
      })}
    </section>
    </React.Fragment>
  );
};

export default ImageSlider;