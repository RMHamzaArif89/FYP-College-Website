import React from 'react'
import './feeStructure.css'
import FeeStructureData from './FeeStructureData'

function FeeStructure() {
  return (
    <div className="feeStructure">

      <table>
        <thead>
          <tr>
            <th>Title Of Funds</th>
            <th>BS</th>
            <th>Remakrs</th>
          </tr>
        </thead>
        <tbody>
          {
            FeeStructureData.map((data) => {
              return (
                <tr>
                  <td><strong>{data.heading}</strong></td>
                  <td>{data.fee}</td>
                  <td>{data.remakrs}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default FeeStructure
