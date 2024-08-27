import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import AdminSportsNewsCom from './AdminSportsPageCom';
import '../adminEditPage.css'


function AdminSportsNewsPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({

    img: '',
    title: '',
    detail: '',
    date:'',

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
    formData.append("detail",values.detail)
    formData.append("date",values.date)



    const res=await axios.post(
      'http://localhost:5001/api/sportsNews/createSportsNews',
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
      formData.append("detail",values.detail)
      formData.append("date",values.date)

  
  
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
    <div className='adminPageEdit'>
      <form className='adminEditPageForm' onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
      <div className="adminEditPageHeading">Create Sports News</div>

        <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*'  className='adminEditPageImgInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.title} name="title" type="text" placeholder='Title'  className='adminEditPageTitleInp' />
        <input onChange={(e) => { handleChange(e) }} value={values.date} name="date" type="date"   className='adminEditPageDateInp' />

        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEditPageDetail' placeholder="Detail" 
          />;
    
        <button className="adminEditPagebtn" type="submit">Create Sports News</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminSportsNewsCom/>
    }


    </div>
  )
}

export default AdminSportsNewsPage