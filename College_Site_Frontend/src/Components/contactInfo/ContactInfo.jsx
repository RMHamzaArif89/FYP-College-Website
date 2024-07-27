import React from 'react'
import './contactInfo.css'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImCross } from "react-icons/im";

function ContactInfo({setInfo}) {
  return (
    <div className='contactInfo'>
        <div className="contactInfoCross">
            <ImCross onClick={()=>setInfo(false)}/>
        </div>
       <div className="contactInfoRow">
       <div className="contactIcon">{<MdEmail/>}</div>
        <div className="contactInfoData">ranahamzaisonline@gmail.com</div>   
       </div>
       <div className="contactInfoRow">
       <div className="contactIcon">{<IoCall/>}</div>
        <div className="contactInfoData">0346-84463189</div>   
       </div>
       <div className="contactInfoRow">
       <div className="contactIcon">{<FaGithub/>}</div>
        <div className="contactInfoData">https://github.com/RMHamzaArif89</div>   
       </div>
       <div className="contactInfoRow">
       <div className="contactIcon">{<IoLogoWhatsapp/>}</div>
        <div className="contactInfoData">0321-6799757</div>   
       </div>
    </div>
  )
}

export default ContactInfo
