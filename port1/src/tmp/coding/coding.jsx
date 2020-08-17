import React from "react";
import "./main.scss";
import { FaAngleDown } from "react-icons/fa";

const Coding =() =>{


    return (<div className ="coding_main">
        <div className="title">
            <h1>Portfolio</h1>
            <span>introducing my code</span>
        </div>

        <div className = "mouse"> 
            <div className="out">
                
            </div>
            <div className="wheel"></div><br/>
            <span><FaAngleDown /></span>
            scroll down
        </div>
    </div>);
}


export default Coding ;