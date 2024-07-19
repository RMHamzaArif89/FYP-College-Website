import React from 'react'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import CardSlider from '../../Components/CardSlider/CardSlider'
import Intro from '../../Components/HomePageIntro/Intro'
import HomeGallery from '../../Components/HomeGallery/HomeGallery'
import HomeCamLife from '../../Components/HomeCamLife/HomeCamLife'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <ImgSlider />
      <Intro />
      <CardSlider />
      <div className="campusDet">
        <HomeCamLife />
        <HomeGallery />
      </div>

    </div>
  )
}

export default Home
