import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminCareersRow({ careers, deleteCareers }) {
    
    return (
        <>
           
            <div className="adminEditPageTitle">{careers.semesterName}</div>
            <div className="adminEditPageDate">{careers.date}</div>
            <div className='adminEditPageDet'  dangerouslySetInnerHTML={{__html:careers.detail}}   />
          <div className="adminBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteCareers(careers._id) }}> <MdDelete /> </div>
            <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminCareersRow