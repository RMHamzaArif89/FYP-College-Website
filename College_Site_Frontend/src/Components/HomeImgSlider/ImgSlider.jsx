import { useEffect, useRef, useState } from 'react'
import Data from './imgSliderData'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { GoDot } from "react-icons/go";
import ImgCon from './ImgCon';
import './imgSlider.css'

function ImgSlider() {
    let [data, setData] = useState(Data)
    let [val, setVal] = useState(0)

    let clickFunc=(ind)=>{
        setVal(ind)
    }

    let LeftClick = () => {
        if (val <= 0) {
            setVal(data.length - 1)
        }
        else {
            setVal(val - 1)
        }

    }
    let RightClick = () => {

        if (val == data.length - 1) {
            setVal(0)
        } else {
            setVal(val + 1)
        }
    }

    let changeSlide = () => {
        if (val == data.length - 1) {
            setVal(0)
        } else {
            setVal(val + 1)
        }

    }
    // console.log(data.length)

    useEffect(() => {
        setTimeout(() => {
            changeSlide()
        }, 10000)
       


    })



    return (
        <div className='imgSlider'>
            <ImgCon data={data[val].imgUrl} />
            {/* {console.log(data[val])} */}
            <div className="sliderLeft sliderMove" onClick={()=>{LeftClick()}}>{<FaChevronLeft/>}</div>
            <div className="sliderRight sliderMove" onClick={()=>{RightClick()}}>{<FaChevronRight />}</div>
            <div className="pagin">
                {
                    data.map((_, ind) => {
                        return <li key={ind} className='sliderDot' onClick={() => { clickFunc(ind) }} style={{ backgroundColor: val == ind && 'darkred' }}> </li>
                    })
                }
            </div>
        </div>
    )

}

export default ImgSlider
