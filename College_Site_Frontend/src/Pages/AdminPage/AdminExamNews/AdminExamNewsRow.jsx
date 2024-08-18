import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminExamNewsRow({ examNews, deleteExamNews }) {
    
    return (
        <>
           
            <div className="adminExamNewsTitle">{examNews.semesterName}</div>
            <div className="adminExamNewsDate">{examNews.date}</div>
            <div className="adminExamNewsDet">{examNews.detail}</div>
          <div className="adminBtns">
          <div className="adminExamNewsDelete adminEventsIcon" onClick={() => { deleteExamNews(examNews._id) }}> <MdDelete /> </div>
            <div className="adminExamNewsEdit adminEventsIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminExamNewsRow
