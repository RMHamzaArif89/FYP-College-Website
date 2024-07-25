import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './programs.css'

function Programs() {
    return (
        <div className='programs'>
            <div className="programsContainer">
                <div className="programsNavSections">
                    <NavLink className="bsProgramsLink" to={'/programs/bs'}>BS Programs</NavLink>
                    <NavLink className="interProgramsLink" to={'/programs/inter'} >Intermediate Sections</NavLink>
                </div>
                <div className="programsBox">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Programs
