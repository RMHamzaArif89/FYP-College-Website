import React from 'react'
import StudentInsData from './StudentInsData'
import './studentIns.css'
import Note from '../../Components/Note/Note'
function StudentIns() {
    return (
        <div className='studentIns'>
           <div className="studentInsBox">
           <div className="studentInsHeading">
                Instruction for Uniform <img src="/images/uniformIcon.png" alt="" />
            </div>
            <div className="studentInsText">
                It is Compulsory for every student to wear following college uniform properly. A Student without it may not be sallowed to attent the college.
            </div>
            
            <div className="noteCon">
                <Note/>
            </div>
        
            <div className="studentInsCon">
                {
                    StudentInsData.map((data) => {
                        return (
                            <>
                                <div className="insConHeading">{data.heading}</div>
                                <div className="insConSubHeading">{data.subHeading} <img src="/images/morningIcon.png" className='insConIcon' alt="" /></div>
                                <div className="insConText">{data.text}</div>
                                <div className="insConSubHeading">{data.SubHeading2} <img src="/images/eveningIcon.png" className='insConIcon' alt="" /></div>
                                <div className="insConText">{data.text2}</div>
                            </>
                        )
                    })
                }
            </div>
           </div>
        </div>
    )
}

export default StudentIns
