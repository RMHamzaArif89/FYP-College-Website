import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import '../adminEditPage.css'
import AdminCareersCom from './AdminCareersCom';


function AdminExamNewsPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({

    jobTitle: '',
    jobDate: '',
    jobLocation: '',
    jobType: '',
    jobEmail: '',
    jobDepartment: '',
    jobDescription: '',
    jobQualification: '',
    jobInstructions: '',
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
    formData.append("jobTitle",values.jobTitle)
    formData.append("jobType",values.jobType)
    formData.append("jobDate",values.jobDate)
    formData.append("jobLocation",values.jobLocation)
    formData.append("jobEmail",values.jobEmail)
    formData.append("jobDepartment",values.jobDepartment)
    formData.append("jobDescription",values.jobDescription)
    formData.append("jobQualification",values.jobQualification)
    formData.append("jobInstructions",values.jobInstructions)

    console.log(values)
    const res=await axios.post(
      'http://localhost:5001/api/careers/createCareers',
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
// const handlePostSubmit = async (e) => {
//   e.preventDefault();

//     // method: 'PUT',
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // }


//     try{
//       setLoading(true)
//       e.preventDefault()
  
//       const formData=new FormData()
//       formData.append("semesterName",values.semesterName)
//       formData.append("date",values.date)
//       formData.append("detail",values.detail)
  
  
//       const res=await axios.post(
//         '/createEvent',
//         `http://localhost:5001/api/examNews/updatepost/${formData._id}`,
//            formData,{
//            headers:{
//              "Content-Type":"application/json",
           
//            }
//            }
//            )
//           .then(
//                setValues({
//                 semesterName: '',
//                 detail: '',
//                 date: '',
               
//                })
//            )
  
//    }
//    catch(err){
//     setPublishError('Something went wrong');
//    }finally{
//     setLoading(false)
//    }  
// };
  return (
    <div className='adminPageEdit'>
      <form className='adminEditPageForm' onSubmit={(e) => { handleSubmit(e) }}>
      <div className="adminEditPageHeading">Create Job Post</div>

        <input onChange={(e) => { handleChange(e) }} value={values.jobTitle} name="jobTitle" type="text" placeholder='Job Title'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.jobType} name="jobType" type="text" placeholder='Job Type'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.jobDate} name="jobDate" type="date" placeholder='Job Date'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.jobLocation} name="jobLocation" type="text" placeholder='Job Location'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.jobEmail} name="jobEmail" type="email" placeholder='Job Email'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.jobDepartment} name="jobDepartment" type="text" placeholder='Job Department'  className='adminEditPageTitleInp' />
       

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, jobDescription: value });
          }} className='adminEditPageDetail' placeholder="Job Description" 
          />;
        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, jobInstructions: value });
          }} className='adminEditPageDetail' placeholder="Job Instructions" 
          />;
         

        <button className="adminEditPagebtn" type="submit">Create Job Post</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminCareersCom/>
    }


    </div>
  )
}

export default AdminExamNewsPage

