import React from 'react'
import "./TitleStyle.css"

export default function Title(props) {
    const { title, subtitle } = props;
    return (
        <>
            <div className='title'>
                <p>{title}</p>
                <h2>{subtitle}</h2>
            </div>
        </>
    )
}
