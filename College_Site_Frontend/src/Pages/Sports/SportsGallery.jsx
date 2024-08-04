import React from 'react'
import { ReactDom } from 'react-dom'
import { SportsImagesData } from './sportsData'

function SportsGallery() {
    return (
        <div className='galleryPage'>
         <div className="sportsH1">Sports Gallery</div>
            <div className="galleryPageCon2">
                {
                    SportsImagesData.map((data, i) =>
                        <img src={data.img} alt="" className="galleryImg" />
                    )
                }
            </div>


        </div>
    )
}
  
export default SportsGallery
