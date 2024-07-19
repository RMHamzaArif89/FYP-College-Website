import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './homeGallery.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Images from './HomeGalleryData';

export default function HomeGallery() {
  return (
    <>
      <div className="homeGallery">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        centeredSlides={true}
        loop={true}
        className="mySwiper"
      >
        {
            Images.map((img)=>{
                return(
                    <SwiperSlide>
                        <img src={img.src} alt="" className="galleryImg" />
                    </SwiperSlide>
                )
            })
        }
       
      </Swiper>
      </div>
    </>
  );
}
