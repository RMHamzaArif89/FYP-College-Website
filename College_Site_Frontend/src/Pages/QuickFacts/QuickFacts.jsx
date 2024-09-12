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
     <h1 className="quickFactsHeading">
        Quick Facts
      </h1>
      <div className="quickFactsDescription">
      At GGCSF we are proud of our accomplishments. Together, faculty, students, alumni and staff contribute to creating an amazing experience. Here are just a few reasons why GGCSF is the top university in Pakistan
      </div>
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 2000,
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
        className="quickFacts_swiper_container quickFactsSwiperCon"
      >
      {
        QFData.map((facts)=>{
          return(
            <SwiperSlide className='quickFacts_swiper_slide quickFactsSwiperSlide'>
              
             
             <div className="factsName">{facts.name}</div>
              <div className="factsValue">{facts.value}</div>
             
             

            </SwiperSlide>
          )
        })
      }

       
      </Swiper>
    </div>
  )
}

export default QuickFacts
