import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminHomeSlideRow({ homeSlide, deleteHomeSlide }) {
    
    return (
        <>
           <img src={`http://localhost:5001/${homeSlide.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{homeSlide.title}</div> 
            <div className='adminEditPageDet'  dangerouslySetInnerHTML={{__html:homeSlide.detail}}   />
          <div className="adminBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteHomeSlide(homeSlide._id) }}> <MdDelete /> </div>
            <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminHomeSlideRow