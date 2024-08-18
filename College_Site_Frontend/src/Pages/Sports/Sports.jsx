import React, { useEffect, useState } from 'react'
import { SportsCubeData} from './sportsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination , EffectCube} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cube';
import './sports.css'
import SportsGallery from './SportsGallery';
import axios from 'axios'

function Sports() {
  const [sportsNews, setNotice] = useState([]);
  const [publishError, setPublishError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getSportsNews = async () => {
      const res = await axios.get('http://localhost:5001/api/sportsNews/getSportsNews');
      setNotice(res.data.sportsNews)
    };
    getSportsNews();
  },[])

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

      <div className="sportsH1">Sports Events</div>

      <div className="sportsCon2">
        <div className="sportsCol1">
          {
            sportsNews.map((data)=>{
              return(
                <div className="sportsCol1Card">
                <img src={`http://localhost:5001/${data.img}`} alt="" className="sportsCol1CardImg" />
                <div className="sportsCol1Text">
                  <div className="sportsCol1Title">{data.title}</div>
                  <div className="sportsCol1Date">{data.date}</div>
                  <div className="sportsCol1Detail"  dangerouslySetInnerHTML={{__html:data.detail}}   />
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
      <SportsGallery />
    </div>

  )
}

export default Sports
