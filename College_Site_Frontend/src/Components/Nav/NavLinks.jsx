import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
    <>
      <NavLink to="/" activeclassname="active">Home</NavLink>
      <NavLink to="/eventsPage" activeclassname="active">Events</NavLink>
      <NavLink to="/programs" activeclassname="active">Programs</NavLink>
      <NavLink to="/examNews" activeclassname="active">Exam News</NavLink>
      <NavLink to="/careers" activeclassname="active">Careers</NavLink>
      <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      <NavLink to="/GalleryPage" activeclassname="active">Gallery</NavLink>
    </>

  )
}

export default NavLinks