import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
  <>
   <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/eventsPage" activeClassName="active">Events</NavLink>
                <NavLink to="/programs" activeClassName="active">Programs</NavLink>
                <NavLink to="/examNews" activeClassName="active">Exam News</NavLink>
                <NavLink to="/admissionProcess" activeClassName="active">Admissoin Process</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
  </>

  )
}

export default NavLinks