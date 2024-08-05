import React, { useRef } from 'react'
import './TestimonialsStyle.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import user_1 from "../../assets/imgAssets/user-1.png"
import user_2 from "../../assets/imgAssets/user-2.png"
import user_3 from "../../assets/imgAssets/user-3.png"
import user_4 from "../../assets/imgAssets/user-4.png"

function InsideSlider(props) {
    const { userImage, userName, userLocation, userReview } = props
    return (
        <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={userImage} alt="" />
                    <div>
                        <h3>{userName}</h3>
                        <span>{userLocation}</span>
                    </div>
                </div>
                <p>{userReview}</p>
            </div>
        </li>
    )
}


export default function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const slidePrev = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideNext = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <>
            <div className='testimonials'>
                {/* buttons */}
                <button className='prev-btn' onClick={slidePrev}><FaArrowLeft /></button>
                <button className='next-btn' onClick={slideNext}><FaArrowRight /></button>

                <div className='slider'>
                    <ul ref={slider}>
                        <InsideSlider
                            userImage={user_1}
                            userName={"Liza Chauhan"}
                            userLocation={"California, USA"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider
                            userImage={user_2}
                            userName={"Simit Vyas"}
                            userLocation={"New Delhi, India"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider
                            userImage={user_3}
                            userName={"Chameli Rana"}
                            userLocation={"Lucknow, UP"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider
                            userImage={user_4}
                            userName={"Sam Bahadur"}
                            userLocation={"Patiyala, Punjab"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}
