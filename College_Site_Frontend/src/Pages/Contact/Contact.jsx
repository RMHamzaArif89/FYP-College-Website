import React, { useState } from 'react'
import './contact.css'
import { motion } from "framer-motion";
import ContactInfo from '../../Components/contactInfo/ContactInfo'

function Contact() {
  const [showInfo,setShowInfo]=useState(false)
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
      
     <form action="" className="contactForm">
      <div className="contactHeading">Contact us to get Information</div>

        <input type="text" name="name" placeholder='Full Name' id="" className="contactInput" />
        <input type="text" name="rollNumber" placeholder='College Roll Number' id="" className="contactInput" />
        <input type="email" name="email" placeholder='Email' id="" className="contactInput" />
        <input type="number" name="Cell" placeholder='Cell' id="" className="contactInput" max={11} min={11} />
        <select className='contactServices contactInput' placeholder="select subject" name="Services">
          <option value="frontend">Admission Query</option>
          <option value="backend">Exam Query</option>
          <option value="mern">Holidays Query</option>
          <option value="MSOffice">Other</option>
        </select>
        <textarea name="message" className='contactMessage contactInput' placeholder='Message'>
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
