import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
  <>
   <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/services" activeClassName="active">Services</NavLink>
                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
  </>

  )
}

export default NavLinks