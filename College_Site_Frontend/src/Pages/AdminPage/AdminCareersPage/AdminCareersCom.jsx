import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminCareersRow from './AdminCareersRow';



function AdminCareersCom() {
  const [careers, setCareers] = useState([]);
  const [publishError, setPublishError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getExamNews = async () => {
      const res = await axios.get('http://localhost:5001/api/careers/getCareers');
      setCareers(res.data.careers)
    };
    getExamNews();

  }, [loading]);





  const deleteCareers = async (Id) => {

    try {
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/careers/deleteCareers/${Id}`);
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
    catch (e) {
      setPublishError('something went wrong')
    }
    finally {
      setLoading(false)
    }


  }
  return (
    <div className='adminEditPageCom'>
      <div className="adminEditPageHeading">
        ExamNews
      </div>
      <div className="adminEditPageRows">
        {
          careers.length > 0 ? (
            loading ? <div className="loading">
              ...loading
            </div> : (careers.map((careers) =>
              <div className="adminEditPageRow">
                <AdminCareersRow careers={careers} deleteCareers={deleteCareers} />
              </div>))
          ) : <div className="noEditPage">No Exam News Found</div>
        }
      </div>
    </div>
  )
}

export default AdminCareersCom
