import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../images/college_video.mp4';

const VideoPlayer = ({playState, setPlayState}) => {

  // To close the video
  const close=useRef(null);
  function closeVideo(e){
    if(e.target === close.current){
      setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={close} onClick={closeVideo}>
      <video src={video} alt='college-video' autoPlay muted controls />
    </div>
  )
}

export default VideoPlayer;