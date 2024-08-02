import React from 'react'
import './eventsPage.css'

function EventsPage() {
  return (
    <div className='eventsPage'>
      <div className="eventPageCon1"></div>
      <div className="eventPageUpcoming">
        <div className="upcomingHeading">
          Current Events
        </div>
        <div className="upcomingCards">
          <div className="eventPageCard">
            <div className="eventPageCardImg"></div>
            <div className="eventPageCardText">
              <div className="eventPageCardHeading">
                Concert
              </div>
              <div className="eventPageCardDet">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="eventPageCardPoints">
             
              </div>
              <div className="eventPageCardPoints">
             
              </div>
              <div className="eventPageCardPoints">
              
              </div>
            </div>
          </div>
          <div className="eventPageCard"></div>

        </div>
      </div>

      <div className="allEvents">
        <div className="allEventsHeading">
          Find Events
        </div>
        <div className="eventPageCard"></div>
          <div className="eventPageCard"></div>
          <div className="eventPageCard"></div>
          <div className="eventPageCard"></div>
          <div className="eventPageCard"></div>
          <div className="eventPageCard"></div>
      </div>

    </div>
  )
}

export default EventsPage
