import React from 'react'
import './cardSlider.css'
import EventData from './eventData'

import {Swiper,SwiperSlide} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-overflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {EffectCoverFlow,Pagination, Navigation} from 'swiper'

function CardSlider() {


  return (
    <div className='cardSlider'>
<Swiper
effect
>
{
        EventData.map((event, index) => (
     <SwiperSlide>
           <div key={index} className='eventCard'>
            <img src={event.image} alt='' />
            <div className='card-content'>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className='card-date'>{event.date}</div>
            </div>
          </div>  
     </SwiperSlide>
            ))
          
    }
  
</Swiper>

          </div>
        )
}

      export default CardSlider
