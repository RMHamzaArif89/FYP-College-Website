import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiImessage } from "react-icons/si";
// import { TbMessageCircleFilled } from "react-icons/tb";
import { FaReplyAll } from "react-icons/fa";

function AdminContactRow({ userContact, deleteUserContact }) {
    let[showReply,setShowReply]=useState(false);
    
    return (
        <>
        <div className="adminContactDetail">
        <div className="adminContactDetailBox"><i className="detailBoxIcon"><FaUserTie/></i>{userContact.name} </div>
        <div className="adminContactDetailBox"><i className="detailBoxIcon"><FaRegIdCard/></i>{userContact.rollNumber}</div>
        <div className="adminContactDetailBox"><i className="detailBoxIcon"><FaPhoneAlt/></i>{userContact.cell}</div>
        <div className="adminContactDetailBox"><i className="detailBoxIcon"><MdOutlineMailOutline/></i>{userContact.email}</div>
        </div>
        <div className="adminContactQuery">{userContact.query}</div>
        <div className="adminContactMessage" onMouseOver={()=>{setShowReply(true)}} onMouseOut={()=>{setShowReply(false)}}>
        <i className="adminContactMessageIcon"><SiImessage/></i>
            {userContact.message}
            {showReply&&<i className="adminMessageReplyIcon"><FaReplyAll/></i>}
            </div>
            <i className="adminMessageDeleteIcon"><MdDelete onClick={()=>{deleteUserContact(userContact._id)}}/></i>
       
        </>
    )
}

export default AdminContactRow
