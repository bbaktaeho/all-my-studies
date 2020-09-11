import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageView from './ImageView';

import fs from 'fs';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <ImageView src="/images/slide1.png"></ImageView>
      </div>
      <div>
        <ImageView src="/images/slide2.jpg"></ImageView>
      </div>
      <div>
        <ImageView src="/images/slide3.png"></ImageView>
      </div>
      <div>
        <ImageView src="/images/slide4.png"></ImageView>
      </div>
    </Slider>
  );
};

export default Slideshow;
