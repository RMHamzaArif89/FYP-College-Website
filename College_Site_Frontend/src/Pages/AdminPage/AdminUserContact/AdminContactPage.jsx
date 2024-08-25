import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminContactRow from './AdminContactRow';
import './adminContact.css'



function AdminContactPage() {
  const [userContact, setUserContact] = useState([]);
  const [publishError, setPublishError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUserContact = async () => {
      const res = await axios.get('http://localhost:5001/api/userContact/getUserContact');
      setUserContact(res.data.userContact)
    };
    getUserContact();

  }, [loading]);





  const deleteUserContact = async (Id) => {

    try {
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/userContact/deleteUserContact/${Id}`);
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
        User Query Messages
      </div>
      <div className="adminEditPageRows">
        {
          userContact.length > 0 ? (
            loading ? <div className="loading">
              ...loading
            </div> : (userContact.map((userContact) =>
              <div className="adminContactRow">
                <AdminContactRow userContact={userContact} deleteUserContact={deleteUserContact} />
              </div>))
          ) : <div className="noEditPage">No Query Found</div>
        }
      </div>
    </div>
  )
}

export default AdminContactPage
