import React, { useState } from 'react'
import { BSData } from './ProgramsData'
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
            BSData.filter((data)=>{
              return query.toLowerCase() ===''? data:
              data.title.toLowerCase().includes(query.toLowerCase()) 
            }).map((data,i)=>{
                return(
               <div className="programsCard">
                <div className="programsTitle ">{data.title}</div>
                <div className="programsBtn" onClick={()=>openModalFunc(i)}>Detail</div>
               </div>
                )
            })
        }
        {programModal&&<ProgramsModal data={BSData[ind]} setModal={setProgramsModal}/>}
  </div>  
</>
  )
}

export default BS