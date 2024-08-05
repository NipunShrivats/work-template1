import React from 'react';
import "./AboutStyle.css";
import aboutImg from "../../assets/imgAssets/about.png"
import playIcon from "../../assets/imgAssets/play-icon.png"


export default function About({ setPlayState }) {
    return (
        <>
            <div className='about'>
                <div className='about-left'>
                    <img src={aboutImg} className='about-img' alt="" />
                    <img src={playIcon} className='play-icon' alt="" onClick={() => { setPlayState(true) }} />
                </div>
                <div className='about-right'>
                    <h3>About XYZ ABC</h3>
                    <h2>Nurturing Tomorrow's Leaders Today</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, libero soluta saepe id magnam laboriosam. Officiis ipsa expedita libero nemo, nesciunt dignissimos quasi quos sapiente quo. Voluptates beatae autem nulla.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, libero soluta saepe id magnam laboriosam. Officiis ipsa expedita libero nemo, nesciunt dignissimos quasi quos sapiente quo. Voluptates beatae autem nulla.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, libero soluta saepe id magnam laboriosam. Officiis ipsa expedita libero nemo, nesciunt dignissimos quasi quos sapiente quo. Voluptates beatae autem nulla.</p>
                </div>
            </div>
        </>
    )
}
