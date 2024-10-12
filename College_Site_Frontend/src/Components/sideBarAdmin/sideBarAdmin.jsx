import React from 'react'
import './sideBarAdmin.css'
import { NavLink } from 'react-router-dom'

function SideBarAdmin() {
  return (
    
    <div className='sideBarAdmin'>
        <div className="sideBarAdminHeading">Admin Pages
        
        </div>
        <div className="sideBarAdminLinks">
            {/* <NavLink to={'/adminHomeSliderPage'} activeclassname='active'>Home Page Slides</NavLink> */}
            <NavLink to={'/adminEventPage'} activeclassname='active'>Events</NavLink>
            <NavLink to={'/adminExamNewsPage'} activeclassname='active'>Exam News</NavLink>
            <NavLink to={'/adminNoticePage'} activeclassname='active'>Noticeboard</NavLink>
            <NavLink to={'/adminContactPage'} activeclassname='active'>Contact Page</NavLink>
            <NavLink to={'/adminSportsNewsPage'} activeclassname='active'>Sports Page</NavLink>
            <NavLink to={'/adminCareersPage'} activeclassname='active'>Jobs Page</NavLink>
            <NavLink to={'/adminJobApplications'} activeclassname='active'>Jobs Applications</NavLink>
        </div>
      
    </div>
  )
}

export default SideBarAdmin
