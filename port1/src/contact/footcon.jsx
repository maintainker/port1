import React from "react";
import Jung from "../img/jung.jpg"
import {MdEmail, MdPhone, MdLocationOn} from "react-icons/md";


const FootCon =()=>{
    return (<div className="cont_me">
        <div className="wrap">
            <div className="name">
                <span>Sul</span><br/>
                <span>Young</span><br/>
                <span>Hwan</span>
            </div>
            <div className="photo"><div><img src={Jung} alt="증명사진"/></div><span>Front-End Developer</span></div>
            <div className="cont">
                <ul>
                    <li>
                        <div className="mail"><MdEmail/></div>
                        <span>syhwan88@naver.com</span>
                    </li>
                    <li>
                        <div className="phome"><MdPhone/></div>
                        <span>+82 10-6657-7514</span>
                    </li>
                    <li>
                        <div className="direction"><MdLocationOn/></div>
                        <span>geumcheon-gu, Seoul</span>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>)
}

export default FootCon;