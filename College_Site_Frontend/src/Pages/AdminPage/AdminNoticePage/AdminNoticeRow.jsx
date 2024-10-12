import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminNoticeRow({ notice, deleteNotice }) {
    
    return (
        <>
           <img src={`http://localhost:5001/${notice.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{notice.title}</div> 
            <div className='adminEditPageDet'  dangerouslySetInnerHTML={{__html:notice.detail}}   />
          <div className="adminEditPageBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteNotice(notice._id) }}> <MdDelete /> </div>
            {/* <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div> */}
          </div>
        </>
    )
}

export default AdminNoticeRow
