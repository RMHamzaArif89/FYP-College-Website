import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import './AdminExamNewsPage.css'
import AdminExamNewsCom from './AdminExamNewsCom';


function AdminExamNewsPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({

    semesterName: '',
    detail: '',
    date: '',
  })
const navigate=useNavigate()

  const handleChange = (e) => {

    // e.preventDefault()
    let name = e.target.name;
    let val = e.target.value;

    setValues((pre) =>
    ({
      ...pre, [name]: val
    }
    )
    )

  }

const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
    setLoading(true)
    e.preventDefault()

    const formData=new FormData()
    formData.append("semesterName",values.semesterName)
    formData.append("detail",values.detail)
    formData.append("date",values.date)


    const res=await axios.post(
      'http://localhost:5001/api/examNews/createExamNews',
         formData,{
         headers:{
           "Content-Type":"multipart/form-data",
         
         }
         }
         )
        // .then(
        //      setValues({
        //       semesterName: '',
        //       detail: '',
        //       date: '',
        //      })
        //  )

 }
 catch(err){
  setPublishError('Something went wrong');
 }finally{
  setLoading(false)
 }  

}

//update event
const handlePostSubmit = async (e) => {
  e.preventDefault();

    // method: 'PUT',
    // headers: {
    //   'Content-Type': 'application/json',
    // }


    try{
      setLoading(true)
      e.preventDefault()
  
      const formData=new FormData()
      formData.append("semesterName",values.semesterName)
      formData.append("date",values.date)
      formData.append("detail",values.detail)
  
  
      const res=await axios.post(
        '/createEvent',
        `http://localhost:5001/api/examNews/updatepost/${formData._id}`,
           formData,{
           headers:{
             "Content-Type":"multipart/form-data",
           
           }
           }
           )
          .then(
               setValues({
                img: '',
                semesterName: '',
                detail: '',
                date: '',
                time: '',
                location: '',
               })
           )
  
   }
   catch(err){
    setPublishError('Something went wrong');
   }finally{
    setLoading(false)
   }  
};
  return (
    <div className='adminExamNewsPage'>
      <form className='adminExamNewsPageForm' onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
      <div className="adminExamNewsHeading">Create Exam News</div>

        <input onChange={(e) => { handleChange(e) }} value={values.semesterName} name="semesterName" type="text" placeholder='Title'  className='eventInputTitle' />

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminExamNewsDetail' placeholder="Detail" 
          />;
          <input onChange={(e) => { handleChange(e) }} value={values.date} name="date" type="date"  className='adminExamNewsTimeInupt' />

        <button className="adminExamNewsbtn" type="submit">Create ExamNews</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminExamNewsCom/>
    }


    </div>
  )
}

export default AdminExamNewsPage
