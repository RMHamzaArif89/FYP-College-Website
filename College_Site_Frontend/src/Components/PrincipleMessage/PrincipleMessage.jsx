import React from 'react'
import './principleMessage.css'
import { Typewriter } from 'react-simple-typewriter'

function PrincipleMessage() {
  return (
    <div className='principleMsg'>
   
      <div className="msgConLeft">
        <div className="msgConLeftImg"></div>
        <div className="msgConLeftName">Principle</div>
        <div className="msgConLeftName">
        <Typewriter
                words={["Prof. Dr. Muhammad Alim"]}
                loop={3}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}

              />
        </div>
      </div>
      <div className="msgConRight">
        <div className="msgConRightHeading">Principle Message</div>
        <div className="msgConRightText">
        <Typewriter
                words={[" Government Graduate College Samanabad, Faislabad is amongst the best colleges in the Punjab, with a history of contribution in the field of education. Therefore, strive for excellence, slowly, steadly, continously, consistengly with full zeal and devotion for glorious future and bright results. This is high time for us to preform our respnsibilites with sincerity and diligence to play our positive role in the progress of our beloved homeland, Pakistan."]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={20}
                delaySpeed={1000}

              />
        </div>
    
      </div>
 
      
    </div>
  )
}

export default PrincipleMessage

