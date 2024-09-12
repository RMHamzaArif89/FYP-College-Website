import React, { useState } from 'react'
import { BSData } from './ProgramsData'
import departmentData from '../DepartmentPage/depertment.js'
import ProgramsModal from './ProgramsModal'
import './programs.css'


function BS() {
  let[query,setQuery]=useState('')
  const[programModal,setProgramsModal]=useState(false)
  const [ind,setInd]=useState(0)
  // console.log(query)

  const openModalFunc=(i)=>{
    setInd(i)
    setProgramsModal(true)
  }
  return (
<>
<input type="text" placeholder='search program' className='searchProgram' value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
<div className="programsBoxData">
  
{
            departmentData.filter((data)=>{
              return query.toLowerCase() ===''? data:
              data.title.toLowerCase().includes(query.toLowerCase()) 
            }).map((data,i)=>{
                return(
               <div className="programsCard">
                <div className="programsTitle ">{data.name}</div>
                <div className="programsBtn" onClick={()=>openModalFunc(i)}>Detail</div>
                <div className="departmentLink"></div>
               </div>
                )
            })
        }
        {programModal&&<ProgramsModal data={departmentData[ind]} setModal={setProgramsModal}/>}
  </div>  
</>
  )
}

export default BS