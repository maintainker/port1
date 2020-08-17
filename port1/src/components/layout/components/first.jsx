import React from "react";
import "./first.scss";
import { FaAngleDown } from "react-icons/fa";

const Firstpage =({children,script}) =>{


    return (<div className ="coding_main">
        <div className="title">
            <h1>{children}</h1>
            <span>{script}</span>
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


export default Firstpage ;