import React,{useRef} from 'react'
import './Video.css'
function Video() {
    const videoPlayer = useRef(null)
    const handlePause=()=>{
        videoPlayer.current.pause()
    }
    const handlePlay=()=>{
        videoPlayer.current.play()
    }

  return (
    <div>
    <div>

        <video ref={videoPlayer} width='520' height='520' >
            <source  src='/Video/Anime.mp4' type="video/mp4"/>
        </video>
    </div>
        <button className='play' onClick={handlePlay}>Play</button>
        <button className='pause' onClick={handlePause}>Pause</button>

    </div>
  )
}

export default Video