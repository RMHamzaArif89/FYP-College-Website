import React from 'react'
import EventData from './eventData'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './cardSlider.css'

import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



function CardSlider() {


  return (

    <div className="container">
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
        EventData.map((event)=>{
          return(
            <SwiperSlide className='swiper-slide'>
              <img src="" alt="" className='eventImg'/>
             <div className="eventText">
             <div className="eventTitle">{event.title}</div>
              <div className="eventDate">{event.date}</div>
              <div className="evnetDescription">{event.description}</div>
             </div>

            </SwiperSlide>
          )
        })
      }

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default CardSlider
