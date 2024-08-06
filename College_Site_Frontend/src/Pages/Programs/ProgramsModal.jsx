import React, { useState } from 'react'
import './programs.css'
import { ImCross } from "react-icons/im";

function ProgramsModal({data,setModal}) {
   
  return (
<div className="programsModalCon">
<div className='programsModal'>
        <div className="contactInfoCross">
        <ImCross onClick={() => setModal(false)} />
      </div>
        <div className="programsModalHeading">{data.title} Department</div>
        <div className="programsModalHeading2">Mission Statement</div>
        <div className="programsModalDes">
            {data.description}
        </div>

      
    </div>
</div>
  )
}

export default ProgramsModal
