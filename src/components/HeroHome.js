import React from 'react'
import marvel_video from '../assets/marvel_video.mp4'
import { FaArrowDown } from "react-icons/fa";

const HeroHome = () => {
    return (
        <div className="hero__home">
           <video autoPlay loop muted style={{
               position: 'absolute',
               width: '100%',
               left: '50%',
               top: 'calc(50% + 70px)',
               height: '100vh',
               objectFit: 'cover',
               transform: 'translate(-50%, -50%)',
               zIndex :'-1',
           }}>
               <source src={marvel_video} type="video/mp4"/>
           </video>
           <div className="scroll__down">
             <span><FaArrowDown/></span>
           </div>
        </div>
    )
}

export default HeroHome;