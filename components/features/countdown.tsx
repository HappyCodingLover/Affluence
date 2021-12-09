import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props:any) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className="product-countdown-container">
            <div className="product-countdown countdown-compact">
                <span className="countdown-section hours">
                    <span className="countdown-amount">00<span className="mr-1 ml-1">:</span></span>
                </span>

                <span className="countdown-section minutes">
                    <span className="countdown-amount">0{minutes}<span className="mr-1 ml-1">:</span></span>
                </span>

                <span className="countdown-section seconds">
                    <span className="countdown-amount">{seconds < 10 ?  `0${seconds}` : seconds}</span>
                </span>
            </div>
            <span className="ml-2 text-transform-none label mr-2">Left</span>
            <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" className="w-auto position-relative" width="12" height="12" alt="thumbnail"/>
        </div> 
    )
}

export default Timer;