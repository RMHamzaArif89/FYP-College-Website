import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminEventsRow from './AdminEventsRow';



function AdminEventCom() {
  const [events, setEvents] = useState([]);
  const [publishError,setPublishError]=useState(null)
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get('http://localhost:5001/api/events/getEvents');
      setEvents(res.data.events)
    };
    getEvents();

  }, [loading]);





  const deleteEvent=async(Id)=>{

    try{
      setLoading(true)
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
    finally{
      setLoading(false)
    }


  }
  return (
    <div className='adminEventCom'>
      <div className="adminEventHeading">
        Events
      </div>
    <div className="adminEvents">
  {
    events.length>0?  (
      loading?<div className="loading">
...loading
      </div>: (events.map((event) =>
          <div className="adminEventsRow">
            <AdminEventsRow event={event} deleteEvent={deleteEvent}/>
          </div>))
    ):<div className="noEvents">No Events Found</div>
  }
    </div>
    </div>
  )
}

export default AdminEventCom
