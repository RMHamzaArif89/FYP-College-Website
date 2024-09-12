import React from 'react'
import { FaUserTie } from "react-icons/fa";
import './topBarAdmin.css'
import { useContext } from 'react';
import adminContext from '../../contextApi/AdminContext';

export default function TopBarAdmin() {
  const{setShowSideBar,showSideBar}=useContext(adminContext)
  
  return (
    <div className='topBarAdmin'>
      <div className="topBarHeading">
        Admin Panel <img src="/images/NavMenu3.png" alt="" className="navMenu" onClick={()=>{setShowSideBar(!showSideBar)}} />
      </div>
      <div className="topBarUser">
      Admin <FaUserTie />
      </div>
    </div>
  )
}
