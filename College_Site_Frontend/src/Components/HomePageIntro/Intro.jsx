import React from 'react'
import './intro.css'

function Intro() {
    return (
        <div className='intro'>
            <div className="introText">
                <div className="introHeading">
                    Welcome To GGCSF
                </div>
                <div className="introPara">
                    LUMS is an extraordinary place for learning, discovery and transformation. Here, you have the freedom to ask questions, challenge the ordinary and spark innovation. We seek out bright and curious minds with revolutionary ideas to create an empowering community of leaders and change makers.
                </div>
            </div>
            <div className="introVideo">
                <video src="/video/homepagevideo.mp4" controls muted autoplay></video>
            </div>

        </div>
    )
}

export default Intro
