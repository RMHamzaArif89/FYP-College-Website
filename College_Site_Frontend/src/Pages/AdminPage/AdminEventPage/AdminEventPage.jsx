import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import './AdminEventPage.css'
import AdminEventCom from './AdminEventCom';


function AdminEventPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({

    img: '',
    title: '',
    detail: '',
    date: '',
    time: '',
    location: '',

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
    formData.append("img",values.img)
    formData.append("title",values.title)
    formData.append("date",values.date)
    formData.append("detail",values.detail)
    formData.append("time",values.time)
    formData.append("location",values.location)


    const res=await axios.post(
      'http://localhost:5001/api/events/createEvent',
         formData,{
         headers:{
           "Content-Type":"multipart/form-data",
         
         }
         }
         )
        // .then(
        //      setValues({
        //       img: '',
        //       title: '',
        //       detail: '',
        //       date: '',
        //       time: '',
        //       location: '',
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
      formData.append("img",values.img)
      formData.append("title",values.title)
      formData.append("date",values.date)
      formData.append("detail",values.detail)
      formData.append("time",values.time)
      formData.append("location",values.location)
  
  
      const res=await axios.post(
        '/createEvent',
        `http://localhost:5001/api/events/updatepost/${formData._id}`,
           formData,{
           headers:{
             "Content-Type":"multipart/form-data",
           
           }
           }
           )
          .then(
               setValues({
                img: '',
                title: '',
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
    <div className='adminEventPage'>
      <form className='adminEventPageForm' onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
      <div className="adminEventHeading">Create Event</div>

        <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*'  className='eventInputImg' />
        <input onChange={(e) => { handleChange(e) }} value={values.title} name="title" type="text" placeholder='Title'  className='eventInputTitle' />

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEventDetail' placeholder="Detail" 
          />;
        <div className='adminEventTime'>
          <input onChange={(e) => { handleChange(e) }} value={values.date} name="date" type="date"  className='adminEventTimeInupt' />
          <input onChange={(e) => { handleChange(e) }} value={values.time} name="time" type="time"  className='adminEventTimeInupt' />
        </div>
        <input onChange={(e) => { handleChange(e) }} value={values.location} name="location" type="text" placeholder='Location'  className='adminEventLocation' />

        <button className="adminEventbtn" type="submit">Create Event</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminEventCom/>
    }


    </div>
  )
}

export default AdminEventPage
