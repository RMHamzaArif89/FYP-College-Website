import React, { useState } from 'react'
import './contact.css'
import { motion } from "framer-motion";
import ContactInfo from '../../Components/contactInfo/ContactInfo'
import axios from 'axios'

function Contact() {
  const [showInfo,setShowInfo]=useState(false)

  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({

    name: '',
    email: '',
    cell: '',
    query: '',
    message: '',
    rollNumber: '',
   

  })
// const navigate=useNavigate()

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
    console.log(values)

    const formData=new FormData()
    formData.append("name",values.name)
    formData.append("rollNumber",values.rollNumber)
    formData.append("email",values.email)
    formData.append("cell",values.cell)
    formData.append("query",values.query)
    formData.append("message",values.message)
   



    const res=await axios.post(
      'http://localhost:5001/api/userContact/createUserContact',
         formData,{
         headers:{
          "Content-Type":"application/json",
         
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


  return (
    <div className='contact'>
      {
        showInfo && <ContactInfo setInfo={setShowInfo} />  
      }
     <div className="contactCon">
      <motion.div onClick={()=>setShowInfo(!showInfo)}  whileTap={{ scale: 0.3 }} animate={{  opacity:0.8 }}
  transition={{ repeat: Infinity, duration: 3 }} className="contactInfoBtn">
        <img src="/images/contacts.png" alt="" className="contactInfoImg" />
        Contact Information
      </motion.div>
      
     <form className="contactForm" onSubmit={(e) => { handleSubmit(e) }}>
      <div className="contactHeading">Contact us to get Information</div>
        <input type="text" onChange={(e) => { handleChange(e) }} value={values.name} name="name" placeholder='Full Name' id="" className="contactInput" />
        <input type="number"onChange={(e) => { handleChange(e) }} value={values.rollNumber} name="rollNumber" placeholder='College Roll Number' id="" className="contactInput" />
        <input type="email"onChange={(e) => { handleChange(e) }} value={values.email} name="email" placeholder='Email' id="" className="contactInput" />
        <input type="number" onChange={(e) => { handleChange(e) }} value={values.cell} name="cell" placeholder='Cell' id="" className="contactInput" max={11} min={9} />
        <select onChange={(e) => { handleChange(e) }} value={values.query} className='contactServices contactInput' placeholder="select subject" name="query">
          <option value="admission">Admission Query</option>
          <option value="exam">Exam Query</option>
          <option value="holidays">Holidays Query</option>
          <option value="other">Other</option>
        </select>
        <textarea name="message" onChange={(e) => { handleChange(e) }} value={values.message} className='contactMessage contactInput' placeholder='Message'>
        </textarea>
        <motion.input  whileTap={{ scale: 0.85 }}  type="submit" value="Send Message" className='contactBtn' />

      </form>
      <div className="contactImg">
        <div className="img"></div>
      </div>

     </div>

    </div>
  )
}

export default Contact
