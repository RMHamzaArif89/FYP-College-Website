import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminEventsRow({ event, deleteEvent }) {
    
    return (
        <>
            <img src={`http://localhost:5001/${event.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{event.title}</div>
            <div className="adminEditPageDet">{''}</div>
            <div className="adminEditPageDate">{event.date}</div>
            <div className="adminEditPageTime">{event.time}</div>
            <div className="adminEditPageLocation">{event.location}</div>
          <div className="adminEditPageBtns">
          <div className="adminEventsDelete adminEditPageIcon" onClick={() => { deleteEvent(event._id) }}> <MdDelete /> </div>
            <div className="adminEventsEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminEventsRow
