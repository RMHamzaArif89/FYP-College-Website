import React from 'react'
import { FaUserTie } from "react-icons/fa";
import './topBarAdmin.css'

export default function TopBarAdmin() {
  return (
    <div className='topBarAdmin'>
      <div className="topBarHeading">
        Admin Panel <img src="/images/NavMenu3.png" alt="" className="navMenu" />
      </div>
      <div className="topBarUser">
      Admin <FaUserTie />
      </div>
    </div>
  )
}
