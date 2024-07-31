import React from 'react'
import './admissionProcess.css'
import { APData } from './AdmissonProcessData'

function AdmissionProcess() {
  return (
    <div className="admissionProcess">
      {
        APData.map((data) => {
          return (
            <>
              <div className="admissionProcessHeading">
                {data.heading}
              </div>
              <div className="admissionProcessDetails">
                {data.text}
              </div>
              {
                data.Lists &&
                data.Lists.map((list) => {
                  return (
                    <li className="admissionProcessPoints">
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

export default AdmissionProcess
