import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './galleryPage.css'
import { GalleryPageData } from './GalleryPageData'
import GalleryImgModal from './GalleryModal';


// import HoImagesModal from '../../Components/HouseImagesModal/HouseImagesModal'

function GalleryPage() {
    const [showImageModal,setShowImageModal]=useState(false)
    const [ind,setInd]=useState(0)
    const ClickOnImg=(i)=>{
        setInd(i) 
        setShowImageModal(true)
        
    }
    return (
        <div className='galleryPage'>
            <div className="galleryPageCon">
                <div className="galleryPageConText">
                    <div className="conTextHeading">Photo Gallery</div>
                    <div className="conTextDet">Whether our students and faculty are producing groundbreaking research, or solving challenges, there is always something exciting happening at GGCSF!

                    </div>
                </div>
            </div>

            <div className="galleryPageCon2">
             {
                GalleryPageData.map((data,i)=>
                <img src={data.img} alt="" onClick={()=>ClickOnImg(i)} className="galleryImg" />
                )
             }
            </div>
            
    {
      showImageModal&& ReactDom.createPortal(
        <GalleryImgModal img={GalleryPageData[ind].img} setModal={setShowImageModal}/>,
         document.querySelector('.modalPortal')
      )
    }

        </div>
    )
}

export default GalleryPage
