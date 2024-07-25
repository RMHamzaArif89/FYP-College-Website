import React, { useState } from 'react'
import { InterData } from './ProgramsData'
function Inter() {
  let[query,setQuery]=useState('')
  return (
    <>
    <input type="text" placeholder='search program' className='searchProgram' value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
    <div className="programsBoxData">
      
    {
                InterData.filter((data)=>{
                  return query.toLowerCase() ===''? data:
                  data.title.toLowerCase().includes(query.toLowerCase()) 
                }).map((data)=>{
                    return(
                   <div className="programsCard">
                    <div className="programsTitle ">{data.title}</div>
                        <div className="programsImg">{data.img}</div>
                        <div className="programsDes">{data.description}</div>
                   </div>
                    )
                })
            }
      </div>  
    </>
  )
}

export default Inter
