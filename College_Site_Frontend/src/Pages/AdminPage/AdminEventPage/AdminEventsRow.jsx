import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminEventsRow({ event, deleteEvent }) {
    return (
        <>
            <img src={`http://localhost:5001/${event.img}`} alt="" className="adminEventsImg" />
            <div className="adminEventsTitle">{event.title}</div>
            <div className="adminEventsDet">{''}</div>
            <div className="adminEventsDate">{event.date}</div>
            <div className="adminEventsTime">{event.time}</div>
            <div className="adminEventsLocation">{event.location}</div>
            <div className="adminEventsDelete adminEventsIcon" onClick={() => { deleteEvent(event._id) }}> <MdDelete /> </div>
            <div className="adminEventsEdit adminEventsIcon"> <FaEdit /> </div>
        </>
    )
}

export default AdminEventsRow
