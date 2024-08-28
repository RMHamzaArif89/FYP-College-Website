import React from 'react'
import ImgSlider from '../../Components/HomeImgSlider/ImgSlider'
import CardSlider from '../../Components/HomeCardSlider/CardSlider'
import Intro from '../../Components/HomePageIntro/Intro'
import HomeGallery from '../../Components/HomeGallery/HomeGallery'
import HomeCamLife from '../../Components/HomeCamLife/HomeCamLife'
import LinksCards from '../../Components/HomeLinksCards/LinksCards'


import './home.css'
import Marquee from '../../Components/Marquee/Marquee'
import CardsMarquee from '../../Components/CardsMarquee/CardsMarquee'
import FacultyMembers from '../../Components/FacultyMembers/FacultyMembers'
function Home() {
  return (
    <div className='home'>
      <ImgSlider />
      <Intro />
      <Marquee/>
      <CardSlider />
      <div className="campusDet">
        <HomeCamLife />
        <HomeGallery />
      </div>
      <CardsMarquee/>
      <LinksCards/>
      <FacultyMembers/>
    
    </div>
  )
}

export default Home
