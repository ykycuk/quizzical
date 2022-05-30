import React from "react";
import ImgBlubBlue from '../img/blob_blue.png';
import ImgBlubYellow from '../img/blob_yellow.png';

export default function StartPage(props) {
    return (
        <section className='startPage'>
            <img className='startPage--imgYellow' src={ImgBlubYellow} alt="yellow"/>
            <h1>Quizzical</h1>
            <p>Check your knowladge</p>
            <button className='startPage--btn' onClick={props.start}>Start quiz</button>
            <img className='startPage--imgBlue' src={ImgBlubBlue} alt="blue"/>
        </section>        
    )
}