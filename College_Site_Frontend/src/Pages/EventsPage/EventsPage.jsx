import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './eventsPage.css'
import { WiTime3 } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
// import { eventsPageData } from './eventsPageData';
// import { eventsPageDataCurrent } from './eventsPageData';
import { FaLongArrowAltRight } from "react-icons/fa";
function EventsPage() {
  let[events,setEvents]=useState([])
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get('http://localhost:5001/api/events/getEvents');
      setEvents(res.data.events)
    };
    getEvents();
    // console.log(events[0].detail.replace(/\"'/g, " "))
  }, []);
  return (
    <div className='eventsPage'>
      <div className="eventPageCon1">
        <div className="eventConText">
          <div className="eventConTextH1">  GPCSF Organize multiple Events in a year with consistencey</div>
        </div>
      </div>
<div className="eventsCon">
<div className="eventPageUpcoming">
        <div className="upcomingHeading">
         Latest Upcoming Events
        </div>
        <div className="upcomingCards">
         {
          events.length>0?(
            events.slice(0,2).map((event)=>{
              return(
                <div className="eventPageCard">
                <img src={`http://localhost:5001/${event.img}`} alt="" className="eventPageCardImg" />
                <div className="eventPageCardText">
                  <div className="eventPageCardHeading title">
                    {event.title}
                  </div>
                 
                   {/* <div dangerouslySetInnerHTML={{__html:event.detail}}  className="eventPageCardDet"/> */}
                  
                  <div className="eventPageCardPoints date">
                  <WiTime3  className='eventPageCardPointsIcon'/> {event.date}
                  </div>
                  <div className="eventPageCardPoints time">
                 <MdOutlineDateRange className='eventPageCardPointsIcon'/> {event.time}
                  </div>
                  <div className="eventPageCardPoints locations">
                  <CiLocationOn className='eventPageCardPointsIcon'/> {event.location}
                  </div>
                  <div className="eventPageCardBtn">Details <FaLongArrowAltRight/></div>
                </div>
              </div>
    
              )
            })
           ): <img src="/images/noDataFoundImg.jpg" className='noDataFoundImg' alt="img here" />
         }
        </div>
      </div>

      <div className="allEvents">
        <div className="allEventsHeading">
          Find Events
        </div>
      
      {
        events.length>0?(
          events.map((event)=>{
            return(
              <div className="eventPageCard">
              <img src={`http://localhost:5001/${event.img}`} alt="" className="eventPageCardImg" />
              <div className="eventPageCardText">
                <div className="eventPageCardHeading title">
                  {event.title}
                </div>
                
                {/* <div dangerouslySetInnerHTML={{__html:event.detail}} className="eventPageCardDet"/> */}
                
                <div className="eventPageCardPoints date">
                <WiTime3  className='eventPageCardPointsIcon'/> {event.date}
                </div>
                <div className="eventPageCardPoints time">
               <MdOutlineDateRange className='eventPageCardPointsIcon'/> {event.time}
                </div>
                <div className="eventPageCardPoints locations">
                <CiLocationOn className='eventPageCardPointsIcon'/> {event.location}
                </div>
                <div className="eventPageCardBtn">Details <FaLongArrowAltRight/></div>
              </div>
            </div>
  
            )
          })
        ): <div className='noDataFound'>No Events Found</div>
      }
         
      </div>
</div>

    </div>
  )
}

export default EventsPage
