import React from 'react'
import './department.css'
import departmentData from './depertment'

function Department() {
  return (
    <div className='department'>
        <img src={departmentData[0].img} alt="" className="departmentFrontImg" />
        <div className="departmentCon">

            <div className="departmentHeading">{departmentData[0].name}</div>
            <div className="departmentDescription">{departmentData[0].description}</div>
            
            
        </div>
      
    </div>
  )
}

export default Department
