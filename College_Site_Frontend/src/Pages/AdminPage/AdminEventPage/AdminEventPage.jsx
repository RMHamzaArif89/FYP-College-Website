import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import './AdminEventPage.css'

function AdminEventPage() {
  const [publishError,setPublishError]=useState(null)
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

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   console.log(values)

  //   try {
  //     const res = await fetch('http://localhost:5001/events', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     if (!res.ok) {
  //       setPublishError(data.message);
  //       console.log(error)
  //       return;
  //     }

  //     if (res.ok) {
  //       setPublishError(null);
  //       navigate(`AdminPage`);
  //     }
  //   } catch (error) {
  //     setPublishError('Something went wrong');
  //   }
  // }
const handleSubmit=async(e)=>{
  e.preventDefault()
  
  console.log('enter')


  try{
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
 catch(err){
  setPublishError('Something went wrong');
 }  

}
  return (
    <div className='adminEventPage'>
      <form className='adminEventPageForm' onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>


        <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*'  className='eventInputImg' />
        <input onChange={(e) => { handleChange(e) }} value={values.title} name="title" type="text"  className='eventInputTitle' />

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEventDetail' />;
        <div className='adminEventTime'>
          <input onChange={(e) => { handleChange(e) }} value={values.date} name="date" type="date"  className='adminEventTimeInupt' />
          <input onChange={(e) => { handleChange(e) }} value={values.time} name="time" type="time"  className='adminEventTimeInupt' />
        </div>
        <input onChange={(e) => { handleChange(e) }} value={values.location} name="location" type="text" placeholder='Location'  className='adminEventLocation' />

        <button className="adminEventbtn" type="submit">Create Event</button>

      </form>


    </div>
  )
}

export default AdminEventPage
