import React from 'react'
import EventData from './eventData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './cardSlider.css'

import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { WiTime3 } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { eventsPageData } from '../../Pages/EventsPage/eventsPageData';
import {Link} from 'react-router-dom';



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
     eventsPageData.map((data)=>
     <SwiperSlide className="eventSliderCard">
     <img src={data.img} alt="" className="eventPageCardImg" />
     <div className="eventPageCardText">
       <div className="eventPageCardHeading title">
         {data.title}
       </div>
       <div className="eventPageCardDet">
         {data.detail}
       </div>
       <div className="eventPageCardPoints date">
       <WiTime3  className='eventPageCardPointsIcon'/> {data.date}
       </div>
       <div className="eventPageCardPoints time">
      <MdOutlineDateRange className='eventPageCardPointsIcon'/> {data.time}
       </div>
       <div className="eventPageCardPoints locations">
       <CiLocationOn className='eventPageCardPointsIcon'/> {data.location}
       </div>
       <div className="eventPageCardBtn">Details <FaLongArrowAltRight/></div>
     </div>
   </SwiperSlide>
     )

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
      <div className="eventsPageLink">
        <Link to={'/eventsPage'}>Explore More <FaLongArrowAltRight/> </Link>
      </div>
    </div>
  )
}

export default CardSlider
