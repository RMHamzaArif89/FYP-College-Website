import React from 'react'
import './eventsPage.css'
import { WiTime3 } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { eventsPageData } from './eventsPageData';
import { eventsPageDataCurrent } from './eventsPageData';
import { FaLongArrowAltRight } from "react-icons/fa";
function EventsPage() {
  return (
    <div className='eventsPage'>
      <div className="eventPageCon1">
        <div className="eventConText">
          <div className="eventConTextH1">  GPCSF Organize multiple Events in a year with consistencey</div>
        </div>
      </div>
      <div className="eventPageUpcoming">
        <div className="upcomingHeading">
          Upcoming Events
        </div>
        <div className="upcomingCards">
         {
          eventsPageDataCurrent.map((data)=>{
            return(
              <div className="eventPageCard">
              <img src={data.img} alt="" className="eventPageCardImg" />
              <div className="eventPageCardText">
                <div className="eventPageCardHeading title">
                  {data.title}
                </div>
                <div className="eventPageCardDet">
                  {data.detail}
                </div>
                <div className="eventPageCardPoints date">
                <WiTime3  className='eventPageCardPointsIcon'/> {data.date}
                </div>
                <div className="eventPageCardPoints time">
               <MdOutlineDateRange className='eventPageCardPointsIcon'/> {data.time}
                </div>
                <div className="eventPageCardPoints locations">
                <CiLocationOn className='eventPageCardPointsIcon'/> {data.location}
                </div>
                <div className="eventPageCardBtn">Details <FaLongArrowAltRight/></div>
              </div>
            </div>
  
            )
          })
         }
        </div>
      </div>

      <div className="allEvents">
        <div className="allEventsHeading">
          Find Events
        </div>
        
        {
          eventsPageData.map((data)=>{
            return(
              <div className="eventPageCard">
              <img src={data.img} alt="" className="eventPageCardImg" />
              <div className="eventPageCardText">
                <div className="eventPageCardHeading title">
                  {data.title}
                </div>
                <div className="eventPageCardDet">
                  {data.detail}
                </div>
                <div className="eventPageCardPoints date">
                <WiTime3  className='eventPageCardPointsIcon'/> {data.date}
                </div>
                <div className="eventPageCardPoints time">
               <MdOutlineDateRange className='eventPageCardPointsIcon'/> {data.time}
                </div>
                <div className="eventPageCardPoints locations">
                <CiLocationOn className='eventPageCardPointsIcon'/> {data.location}
                </div>
                <div className="eventPageCardBtn">Details <FaLongArrowAltRight/></div>
              </div>
            </div>
  
            )
          })
         }
      </div>

    </div>
  )
}

export default EventsPage
