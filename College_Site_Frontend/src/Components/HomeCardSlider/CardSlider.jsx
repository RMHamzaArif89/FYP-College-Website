import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
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
  let[events,setEvents]=useState([])
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get('http://localhost:5001/api/events/getEvents');
      setEvents(res.data.events)
    };
    getEvents();
    // console.log(events[0].detail.replace(/\"'/g, " "))
  }, []);



  
  const slides = [];
  events.slice(0,6).map(event => (
    slides.push(
      <SwiperSlide className="eventSliderCard" key={event._id}>
     <img src={`http://localhost:5001/${event.img}`} alt="" className="eventPageCardImg" />
     {/* <img src={event.img} alt="" className="eventPageCardImg" /> */}
     <div className="eventPageCardText">
       <div className="eventPageCardHeading title">
         {event.title}
       </div>
       <div className="eventPageCardDet">
         {/* {event.detail} */}
       </div>
       <div className="eventPageCardPoints date">
       <WiTime3  className='eventPageCardPointsIcon'/> {event.date}
       </div>
       <div className="eventPageCardPoints time">
      <MdOutlineDateRange className='eventPageCardPointsIcon'/> {event.time}
       </div>
       <div className="eventPageCardPoints locations">
       <CiLocationOn className='eventPageCardPointsIcon'/> {event.location}
       </div>
       <div dangerouslySetInnerHTML={{__html:event.detail}}  className="eventPageCardDet"/>
     </div>
   </SwiperSlide>
    )
  ));


  return (

    <div className="container">
      <h1 className="eventHeading">
        Events
      </h1>
   {
    slides.length>0?(
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
      className="swiper_container"
    >
{
slides

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
    ):'...loading'
   }
      <div className="eventsPageLink">
        <Link to={'/eventsPage'}>Explore More <FaLongArrowAltRight/> </Link>
      </div>
    </div>
  )
}

export default CardSlider
