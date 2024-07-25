import React, { useState } from 'react'
import { BSData } from './ProgramsData'

function BS() {
  let[query,setQuery]=useState('')
  // console.log(query)
  return (
<>
<input type="text" placeholder='search program' className='searchProgram' value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
<div className="programsBoxData">
  
{
            BSData.filter((data)=>{
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

export default BS