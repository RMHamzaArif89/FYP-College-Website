import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminContactRow({ userContact, deleteUserContact }) {
    
    return (
        <>
           <img src={`http://localhost:5001/${userContact.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{userContact.name}</div> 
            <div className="adminEditPageTitle">{userContact.email}</div> 
            <div className='adminEditPageDet'>{userContact.message}</div>
          <div className="adminBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteUserContact(userContact._id) }}> <MdDelete /> </div>
            <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminContactRow
