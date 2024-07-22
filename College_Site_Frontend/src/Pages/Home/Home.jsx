import React from 'react'
import ImgSlider from '../../Components/HomeImgSlider/ImgSlider'
import CardSlider from '../../Components/HomeCardSlider/CardSlider'
import Intro from '../../Components/HomePageIntro/Intro'
import HomeGallery from '../../Components/HomeGallery/HomeGallery'
import HomeCamLife from '../../Components/HomeCamLife/HomeCamLife'
import LinksCards from '../../Components/HomeLinksCards/LinksCards'
import Footer from '../../Components/Footer/Footer'

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
      <LinksCards/>
    
    </div>
  )
}

export default Home
