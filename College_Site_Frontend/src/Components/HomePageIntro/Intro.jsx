import React, { useRef, useState } from 'react'
import './intro.css'

function Intro() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


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
            <button className="playPauseButton" onClick={handlePlayPause}>
                    {isPlaying ? '❚❚' : '▶️'}
                </button>               
                <video
                    ref={videoRef}
                    src="/video/homepagevideo.mp4" // Dummy video for testing
                    muted
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className={isPlaying?'video':''}
                />
            </div>

        </div>
    )
}

export default Intro
