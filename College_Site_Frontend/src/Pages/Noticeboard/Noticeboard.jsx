import React from 'react'
import './noticeboard.css'
import { noticeBoardData } from './NoticeBoard'

function Noticeboard() {
    return (
        <div className='noticeboard'>
            {
                noticeBoardData.map((data) =>

                    <div className="noticeboardCon">
                        <div className="noticeboardConHeading">{data.heading}</div>
                        <div className="noticeboardConHeading2">{data.subHeading}</div>
                        <img src={data.img} alt="" className="noticeboardConImg" />
                    </div>

                )
            }
        </div>
    )
}

export default Noticeboard
