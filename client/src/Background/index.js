import React from "react";

import bull from "../assets/bull-p.svg"

import "./styes/background.css"


const Background = () => {
    return (
        <div className="background">
            <img className="bull" src={bull} alt="dollar sign"/>
        </div>
    )
}

export default Background