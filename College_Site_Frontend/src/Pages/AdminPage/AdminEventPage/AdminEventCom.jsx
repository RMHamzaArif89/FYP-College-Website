import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminEventsRow from './AdminEventsRow';



function AdminEventCom() {
  const [events, setEvents] = useState([]);
  const [publishError,setPublishError]=useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5001/api/events/getEvents');
      setEvents(res.data.events)
    };
    fetchEvents();

  }, []);





  const deleteEvent=async(Id)=>{

    try{
      const res = await axios.delete(`http://localhost:5001/api/events/deleteEvent/${Id}`);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
  
      if (res.ok) {
        setPublishError(null);
        console.log('ok')
        // navigate(`/post/${data.slug}`);
      }

    }
    catch(e){
       setPublishError('something went wrong')
    }


  }
  return (
    <div className='adminEventCom'>
      {
        events.map((event) =>
          <div className="adminEventsRow">
            <AdminEventsRow event={event} deleteEvent={deleteEvent}/>
          </div>)
      }
    </div>
  )
}

export default AdminEventCom
