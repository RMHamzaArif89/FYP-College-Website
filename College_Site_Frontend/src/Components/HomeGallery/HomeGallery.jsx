import React, { useRef, useState } from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './homeGallery.css';

// import required modules
import { EffectCards, Autoplay} from 'swiper/modules';
import Images from './HomeGalleryData';

export default function HomeGallery() {
  return (
    <>
      <div className="homeGallery">
      <Swiper
   
        effect={'cards'}
        grabCursor={true}
        
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
          // disableOnInteraction: false
      }}
        modules={[Autoplay,EffectCards]}
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
