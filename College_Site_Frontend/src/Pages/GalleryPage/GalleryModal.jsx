import React from 'react'
import { ImCross } from "react-icons/im";

function GalleryImgModal({setModal,img}) {

  return (
    <div className='galleryImgModal'>
        <div className="galleryModalImg">
            <img src={img} alt="" />
            <ImCross onClick={()=>setModal(false)} className='crossImgIcon'/>
        </div>
      
    </div>
  )
}

export default GalleryImgModal
