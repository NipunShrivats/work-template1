import React, { useRef } from 'react'
import './VideoPlayerStyle.css';
import testVideo from '../../assets/imgAssets/testimonial.mp4';


export default function VideoPlayer({ playState, setPlayState }) {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }
    return (
        <>
            <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
                <video src={testVideo} autoPlay muted controls></video>
            </div >
        </>
    )
}
