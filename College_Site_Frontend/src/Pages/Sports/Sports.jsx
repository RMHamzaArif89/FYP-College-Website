import React from 'react'
import { SportsCubeData, sportsNews } from './sportsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination , EffectCube} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cube';
import './sports.css'

function Sports() {
  return (
    <div className='sports'>
      <div className="sportsCon">
      <div className="sportsHeading">Sport and Studies go together</div>
      <div className="sportsHeading2">Different Sports Event held for </div>

      <Swiper
        effect={'cube'}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
          // disableOnInteraction: false
      }}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className="sportsSwiper"
      >
        {
          SportsCubeData.map((data)=>{
            return(
              <SwiperSlide className='sportsSwiperSlide' style={{backgroundImage:`url(${data.img})`}}>

                <div className="cubeHeading">{data.heading}</div>
                <div className="cubeText">{data.text}</div>
              </SwiperSlide>
            )
          })
        }
  
      </Swiper>
      </div>

      <div className="sportsCon2">
        <div className="sportsCol1">
          {
            sportsNews.map((data)=>{
              return(
                <div className="sportsCol1Card">
                <img src={data.img} alt="" className="sportsCol1CardImg" />
                <div className="sportsCol1Text">
                  <div className="sportsCol1Title">{data.heading}</div>
                  <div className="sportsCol1Date">{data.date}</div>
                  <div className="sportsCol1Detail">{data.text}</div>
                </div>
                </div>
              )
            })
          }
        </div>
        <div className="sportsCol2">
        <video src="/video/homepagevideo.mp4" controls muted autoplay></video>
        </div>
      </div>
    </div>

  )
}

export default Sports
