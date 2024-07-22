import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './quickFacts.css'
import { QFData } from './QFData';

function QuickFacts() {
  return (
    <div className='quickFacts'>
     <h1 className="eventHeading">
        Events
      </h1>
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
          // disableOnInteraction: false
      }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      {
        QFData.map((facts)=>{
          return(
            <SwiperSlide className='swiper-slide'>
              <img src="" alt="" className='eventImg'/>
             <div className="eventText">
             <div className="eventTitle">{facts.name}</div>
              <div className="eventDate">{facts.value}</div>
             
             </div>

            </SwiperSlide>
          )
        })
      }

        <div className="slider-controler">
          
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default QuickFacts
