import React from 'react'
import './sideBarAdmin.css'
import { NavLink } from 'react-router-dom'

function SideBarAdmin() {
  return (
    <div className='sideBarAdmin'>
        <div className="sideBarAdminHeading">Admin Page</div>
        <div className="sideBarAdminLinks">
            <NavLink exact to={'/adminHomePageSlides'} activeClassName='active'>Home Page Slides</NavLink>
            <NavLink to={'/adminEventPage'} activeClassName='active'>Events</NavLink>
            <NavLink to={'/adminExamNewsPage'} activeClassName='active'>Exam News</NavLink>
            <NavLink to={'/adminNoticePage'} activeClassName='active'>Noticeboard</NavLink>
            <NavLink to={''} activeClassName='active'>Contact Page</NavLink>
            <NavLink to={'/adminSportsNewsPage'} activeClassName='active'>Sports Page</NavLink>
        </div>
      
    </div>
  )
}

export default SideBarAdmin
