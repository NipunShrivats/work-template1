import React from 'react';
import "./HeroStyle.css";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
    return (
        <>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut facere animi inventore velit commodi.</p>
                    <button className='btn'>Explore More
                        <span><FaArrowRightLong /></span>
                    </button>
                </div>
            </div >
        </>
    )
}
