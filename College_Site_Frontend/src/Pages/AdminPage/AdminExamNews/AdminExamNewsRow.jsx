import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminExamNewsRow({ examNews, deleteExamNews }) {
    
    return (
        <>
           
            <div className="adminEditPageTitle">{examNews.semesterName}</div>
            <div className="adminEditPageDate">{examNews.date}</div>
            <div className='adminEditPageDet'  dangerouslySetInnerHTML={{__html:examNews.detail}}   />
          <div className="adminEditPageBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteExamNews(examNews._id) }}> <MdDelete /> </div>
            {/* <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div> */}
          </div>
        </>
    )
}

export default AdminExamNewsRow
