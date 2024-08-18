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

    console.log(values)
    const res=await axios.post(
      'http://localhost:5001/api/examNews/createExamNews',
         formData,{
         headers:{
          "Content-Type":"application/json",
         
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
             "Content-Type":"application/json",
           
           }
           }
           )
          .then(
               setValues({
                semesterName: '',
                detail: '',
                date: '',
               
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
    <div className='adminEditPage'>
      <form className='adminEditPageForm' onSubmit={(e) => { handleSubmit(e) }}>
      <div className="adminEditPageHeading">Create Exam News</div>

        <input onChange={(e) => { handleChange(e) }} value={values.semesterName} name="semesterName" type="text" placeholder='Semester Name'  className='adminEditPageTitleInp' />

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEditPageDetail' placeholder="Detail" 
          />;
          <input onChange={(e) => { handleChange(e) }} value={values.date} name="date" type="date"  className='adminEditPageDateInp' />

        <button className="adminEditPagebtn" type="submit">Create ExamNews</button>

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
