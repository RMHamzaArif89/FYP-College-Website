import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminExamNewsRow from './AdminExamNewsRow';



function AdminExamNewsCom() {
  const [examNews, setExamNews] = useState([]);
  const [publishError,setPublishError]=useState(null)
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getExamNews = async () => {
      const res = await axios.get('http://localhost:5001/api/examNews/getExamNews');
      setExamNews(res.data.examNews)
    };
    getExamNews();

  }, [loading]);





  const deleteExamNews=async(Id)=>{

    try{
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/examNews/deleteExamNews/${Id}`);
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
    examNews.length>0?  (
      loading?<div className="loading">
...loading
      </div>: (examNews.map((examNews) =>
          <div className="adminEditPageRow">
            <AdminExamNewsRow examNews={examNews} deleteExamNews={deleteExamNews}/>
          </div>))
    ):<div className="noEditPage">No Events Found</div>
  }
    </div>
    </div>
  )
}

export default AdminExamNewsCom
