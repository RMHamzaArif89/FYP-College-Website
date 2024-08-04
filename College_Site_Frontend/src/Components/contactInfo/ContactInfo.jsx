import React from 'react'
import './contactInfo.css'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { motion } from 'framer-motion';

function ContactInfo({ setInfo }) {
  const dropIn = {
    hidden: {
      y: "80vh",
      x:"80vh",
      opacity: 0,
    },
    visible: {
      y: "-50%",
      x:'-50%',
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div className='contactInfo'
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="contactInfoCross">
        <ImCross onClick={() => setInfo(false)} />
      </div>
      <div className="contactInfoRow">
        <div className="contactIcon">{<MdEmail />}</div>
        <div className="contactInfoData">gpgcsa.fsd@gmail.com</div>
      </div>
      <div className="contactInfoRow">
        <div className="contactIcon">{<IoCall />}</div>
        <div className="contactInfoData">042-9330094</div>
      </div>
      <div className="contactInfoRow">
        <div className="contactIcon">{<MdLocationPin />}</div>
        <div className="contactInfoData">College Rd, Samanabad, Faisalabad, Punjab</div>
      </div>
      <div className="contactInfoRow">
        {/* <div className="contactIcon">{<IoLogoWhatsapp />}</div> */}
        {/* <div className="contactInfoData">0321-6799757</div> */}
      </div>
    </motion.div>
  )
}

export default ContactInfo
