import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminNoticeRow from './AdminNoticeRow';



function AdminNoticeCom() {
  const [notice, setNotice] = useState([]);
  const [publishError,setPublishError]=useState(null)
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getNotice = async () => {
      const res = await axios.get('http://localhost:5001/api/notice/getNotice');
      setNotice(res.data.notice)
    };
    getNotice();

  }, [loading]);





  const deleteNotice=async(Id)=>{

    try{
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/notice/deleteNotice/${Id}`);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
  
      if (res.ok) {
        setPublishError(null);
        console.log('ok')
        // navigate(`/post/${data.slug}`);
      }

    }
    catch(e){
       setPublishError('something went wrong')
    }
    finally{
      setLoading(false)
    }


  }
  return (
    <div className='adminEditPageCom'>
      <div className="adminEditPageHeading">
        ExamNews
      </div>
    <div className="adminEditPage">
  {
    notice.length>0?  (
      loading?<div className="loading">
...loading
      </div>: (notice.map((notice) =>
          <div className="adminEditPageRow">
            <AdminNoticeRow notice={notice} deleteNotice={deleteNotice}/>
          </div>))
    ):<div className="noEditPage">No Notice Found</div>
  }
    </div>
    </div>
  )
}

export default AdminNoticeCom
