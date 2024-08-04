import React, { useState } from 'react'
import './location.css'
import { motion } from "framer-motion";
import ContactInfo from '../../Components/contactInfo/ContactInfo'


function Location() {
  const [showInfo,setShowInfo]=useState(false)


  return (
    <div className="location">
      {
             showInfo && <ContactInfo setInfo={setShowInfo} />  
      }
      <motion.div onClick={() => setShowInfo(!showInfo)} whileTap={{ scale: 0.3 }} animate={{ opacity: 0.8 }}
        transition={{ repeat: Infinity, duration: 3 }} className="contactInfoBtn">
        <img src="/images/contacts.png" alt="" className="contactInfoImg" />
        Contact Information
      </motion.div>

      <div className="locationContainer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27242.143736955306!2d73.04253004541266!3d31.406742353003047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d4b6af719e5%3A0xd3e9c280ae059e59!2sGovernment%20Graduate%20College%20Samanabad%20Faisalabad!5e0!3m2!1sen!2s!4v1721714244045!5m2!1sen!2s" style={{ border: '0' }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location
