import React from 'react'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import CardSlider from '../../Components/CardSlider/CardSlider'
import Intro from '../../Components/HomePageIntro/Intro'

function Home() {
  return (
    <div className='home'>
      <ImgSlider/>
      <Intro/>
      <CardSlider/>
    </div>
  )
}

export default Home
