import React from 'react'
import './rai.css'
import RulesData from './RAIData'

function RAI() {
 
  return (
    <div className="rulesCon">
     {
        RulesData.map((data)=>{
            return(
                <>
                 <div className="rulesHeading">
       {data.heading}
      </div>
      <div className="rulesDetails">
       {data.text}
      </div>
  {
    data.lists&&   
        data.lists.map((list)=>{
            return(
                <li className="rulesPoints">
                <img src="/images/listIcon.png" alt="" />
                {list}
                </li>
            )
        })
     
  }
                </>
            )
        })
     }
    </div>
  )
}

export default RAI
