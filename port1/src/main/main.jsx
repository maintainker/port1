import React from "react";
import "./main.scss";
import { MdReplay } from "react-icons/md";
import MainMenu from "./MainMenu";
import Mainicon from "./main_icon";


const Main =({click_menu})=>{
    return (<div id="main">
        <div className = "main_tit">
            <div><MdReplay/></div>
            <header>
                Front-End Developer
            </header>
            <span>genuine ideas &amp; coding for creation</span>
            <MainMenu click_menu = {click_menu}/>
            
        </div>
        <Mainicon />
            
    </div>);
}

export default Main;