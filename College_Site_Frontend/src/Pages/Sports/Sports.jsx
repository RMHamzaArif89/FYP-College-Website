import React from 'react'
import { SportsCubeData } from './sportsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import './sports.css'
function Sports() {
  return (
    <div className='sports'>
      <div className="sportsHeading">Sport and Studies go together</div>
      <div className="sportsHeading2">Different Sports Event held for </div>

      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {
          SportsCubeData.map((data)=>{
            return(
              <SwiperSlide className='cubeImg' style={{backgroundImage:`${data.img}`}}>

                <div className="cubeHeading">{data.heading}</div>
                <div className="cubeText">{data.text}</div>
              </SwiperSlide>
            )
          })
        }
  
      </Swiper>
    </div>
  )
}

export default Sports
