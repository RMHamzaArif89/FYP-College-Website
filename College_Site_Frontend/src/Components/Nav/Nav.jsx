import React, { useState } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'

function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <div className="nav-bar">
            <div className="nav-detail">
                <div className="nav-name">GGCSF</div>
                <div className="nav-img">
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>
            <div className="nav-links">
                <NavLinks />
            </div>
            <div className="nav-btn">
            {
                        open? (
                            <img src="/images/NavCross3.png" className='navBtnImg' onClick={() => setOpen(!open)} alt="" />
                        ) : (
                            <img src="/images/NavMenu3.png" className='navBtnImg' onClick={() => setOpen(!open)} alt="" />
                        )   
                    }
            </div>
            {
                open && (
                    <>
                        <div className="nav-side nav-links">
                            <NavLinks />
                        </div>
                    </>
                )
            }

        </div>

    )
}

export default Nav
