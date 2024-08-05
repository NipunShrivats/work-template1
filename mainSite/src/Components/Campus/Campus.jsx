import React from 'react'
import './CampusStyle.css'
import { FaArrowRightLong } from "react-icons/fa6";

import gallery_1 from "../../assets/imgAssets/gallery-1.png";
import gallery_2 from "../../assets/imgAssets/gallery-2.png";
import gallery_3 from "../../assets/imgAssets/gallery-3.png";
import gallery_4 from "../../assets/imgAssets/gallery-4.png";


export default function Campus() {
    return (
        <>
            <div className='campus'>
                <div className='gallery'>
                    <img src={gallery_1} alt="" />
                    <img src={gallery_2} alt="" />
                    <img src={gallery_3} alt="" />
                    <img src={gallery_4} alt="" />
                </div>
                <button className='btn dark-btn'>Explore More
                    <span><FaArrowRightLong /></span>
                </button>
            </div>
        </>
    )
}
