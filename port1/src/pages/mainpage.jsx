import React from "react";
import "../main/main.scss";
import { MdReplay } from "react-icons/md";
import MainMenu from "../main/MainMenu";
import Mainicon from "../main/main_icon";
import BackGround from "../components/background"

const Main =()=>{
    return (
    <>
        <BackGround/>
        <div id="main">
            <div className = "main_tit">
                <div><MdReplay/></div>
                <header>
                    Front-End Developer
                </header>
                <span>genuine ideas &amp; coding for creation</span>
                <MainMenu />
                
            </div>
            <Mainicon />
                
        </div>
    </>);
}

export default Main;