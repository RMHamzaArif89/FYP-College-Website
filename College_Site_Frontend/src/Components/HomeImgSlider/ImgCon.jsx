import React from 'react'

function ImgCon(data) {
    const imgSliderStyle={
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${data.data})`,
        backgroundPosition:'center',
        backgroundSize:' 100% 100%',
    }
  
  return (
    <div className='imgCon' style={imgSliderStyle}>
      <div className='imgConText'>
         
      <div className="imgSliderH1">Welcom to the College</div>
        <div className="imgSliderH2">We Provide u the best</div>

      </div>
      
    </div>
  )
}

export default ImgCon
