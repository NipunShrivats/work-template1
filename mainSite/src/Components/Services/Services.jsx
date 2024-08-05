import React from 'react';
import './ServicesStyle.css';
import program1 from '../../assets/imgAssets/program-1.png'
import program2 from '../../assets/imgAssets/program-2.png'
import program3 from '../../assets/imgAssets/program-3.png'

import programIcon1 from '../../assets/imgAssets/program-icon-1.png'
import programIcon2 from '../../assets/imgAssets/program-icon-2.png'
import programIcon3 from '../../assets/imgAssets/program-icon-3.png'


export default function Services() {
    return (
        <>
            <div className='services'>
                <div className='service'>
                    <img src={program1} alt="" />
                    <div className='caption'>
                        <img src={programIcon1} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program2} alt="" />
                    <div className='caption'>
                        <img src={programIcon2} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program3} alt="" />
                    <div className='caption'>
                        <img src={programIcon3} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={program3} alt="" />
                    <div className='caption'>
                        <img src={programIcon3} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
            </div>
        </>
    )
}
