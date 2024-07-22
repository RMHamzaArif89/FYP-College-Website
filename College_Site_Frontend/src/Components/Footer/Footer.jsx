import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-col1">
        <div className="footerLogo">
          <img src="/images/logo.png" alt="" className="footerLogoImg" />
          <div className="footerLogoH1">GGCSF</div>
        </div>
        <div className="footerSocialLinks">

          <li> <FaFacebook className='s_icon facebook' /> </li>
          <li> <RiTwitterXFill className='s_icon twitter' /> </li>
          <li> <FaYoutube className='s_icon youtube' /> </li>
          <li> <FaLinkedin className='s_icon linkedin' /> </li>
          <li> <IoLogoWhatsapp className='s_icon whatsapp' /> </li>

        </div>
      </div>
      <div className="footer-col2">
        <div className="col21 col2">
          <li>Contact</li>
          <li>Complain Box</li>
          <li>Gallery</li>
          <li>Student Life</li>
        </div>
        <div className="col22 col2">
          <li>Fee Structure</li>
          <li>BS Programs</li>
          <li>Exam News</li>
          <li>Course Outline</li>
        </div>
      </div>
      <div className="footer-col3">
        <div className="footerContactInfo">
          <li>
            <FaLocationArrow className='address' />
            near xyz....
          </li>
          <li>
            <IoCall className='call' />
            0419330094-95
          </li>
          <li>
            <MdOutlinePhoneAndroid className='call' />
            +92-41-9330699
          </li>
          <li>
            <IoMdMail className='mail' />
            info@gcsf.edu.pk
          </li>

        </div>
      </div>
    </div>
  )
}

export default Footer
