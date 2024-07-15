import React from 'react'

function Nav() {
  return (
    <div className="nav-bar">
            <div className="nav-detail">
                <div className="nav-name">RM Hamza</div>
                <div className="nav-img">
                    <img src="/images/avatar-1.svg" alt="" />
                </div>
            </div>
            <div className="nav-links">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/services" activeClassName="active">Services</NavLink>
                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
        </div>

  )
}

export default Nav
