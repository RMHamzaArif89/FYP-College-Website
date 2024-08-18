import React, { useEffect, useState } from 'react'
import './noticeboard.css'
import axios from 'axios'

function Noticeboard() {
    const [notice, setNotice] = useState([]);
    const [publishError, setPublishError] = useState(null)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      const getNotice = async () => {
        const res = await axios.get('http://localhost:5001/api/notice/getNotice');
        setNotice(res.data.notice)
      };
      console.log(notice)
      getNotice();
  
    }, []);
    return (
        <div className='noticeboard'>
            {
                notice.map((data) =>

                    <div className="noticeboardCon">
                        <div className="noticeboardConHeading">{data.title}</div>
                        <div className="noticeboardConDet" dangerouslySetInnerHTML={{__html:data.detail}} />
                        <img src={`http://localhost:5001/${data.img}`} alt="" className="noticeboardConImg" />
                    </div>

                )
            }
        </div>
    )
}

export default Noticeboard
