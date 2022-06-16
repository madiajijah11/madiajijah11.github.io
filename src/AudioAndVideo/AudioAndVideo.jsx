import React from 'react'
import Video from '../assets/videos/background.mp4';
import AudioBackground from '../assets/audio/01-Genshin-Impact-Main-ThemeGens.mp3';

function AudioAndVideo() {
    return (
        <>
            {/* Video Background */}
            <video autoPlay loop playsInline className='Video-background'>
                <source src={Video} type="video/mp4" />
            </video>

            {/* Audio Background */}
            <audio autoPlay loop playsInline className='Video-background'>
                <source src={AudioBackground} type="audio/mp3" />
            </audio>
        </>
    )
}

export default AudioAndVideo