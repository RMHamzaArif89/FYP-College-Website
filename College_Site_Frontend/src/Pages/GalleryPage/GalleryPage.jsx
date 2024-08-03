import React from 'react'
import './galleryPage.css'
import { GalleryPageData } from './GalleryPageData'

function GalleryPage() {
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
                GalleryPageData.map((data)=>
                <img src={data.img} alt="" className="galleryImg" />
                )
             }
            </div>

        </div>
    )
}

export default GalleryPage
