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
import PrincipleMessage from '../../Components/PrincipleMessage/PrincipleMessage'
function Home() {
  return (
    <div className='home'>
      <ImgSlider />
      <Intro />
      <div className='facultyMembers'>
      <PrincipleMessage/>
      <FacultyMembers/>
      </div>
      <Marquee/>
      <CardSlider />
      <div className="campusDet">
        <HomeCamLife />
        <HomeGallery />
      </div>
      <CardsMarquee/>
      <LinksCards/>
    
    
    </div>
  )
}

export default Home
