import React from "react";
import "./main.scss";
import { FaAngleDown } from "react-icons/fa";

const Main =() =>{


    return (<div className ="coding_main">
        <div className="title">
            <h1>Contact</h1>
            <span>If you want to leave a message</span>
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


export default Main ;