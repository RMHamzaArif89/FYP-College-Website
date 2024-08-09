import React from 'react'
import './sideBarAdmin.css'
import { NavLink } from 'react-router-dom'

function SideBarAdmin() {
  return (
    <div className='sideBarAdmin'>
        <div className="sideBarAdminHeading">Admin Page</div>
        <div className="sideBarAdminLinks">
            <NavLink exact to={''} activeClassName='active'>Home Page Slides</NavLink>
            <NavLink to={''} activeClassName='active'>Events</NavLink>
            <NavLink to={''} activeClassName='active'>Exam News</NavLink>
            <NavLink to={''} activeClassName='active'>Noticeboard</NavLink>
            <NavLink to={''} activeClassName='active'>Contact Page</NavLink>
            <NavLink to={''} activeClassName='active'>Sports Page</NavLink>
        </div>
      
    </div>
  )
}

export default SideBarAdmin