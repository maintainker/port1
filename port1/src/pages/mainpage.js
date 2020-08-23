import React from "react";
import "../assets/style/mainpage.scss";
import { MdReplay } from "react-icons/md";
import { FaGithub} from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";
import BackGround from "../components/background"

const Main =({history})=>{
    const menu_list =["about","portfolio","contact"];
    console.log(history);
    const menu =  menu_list.map((v)=>{
        return(<Link key={v} to={v}><li >{v}</li></Link>);
    });


    const window_open = (v) =>{
        if(v==="github"){window.open("https://github.com/maintainker");}   
        else if(v==="velog"){window.open("https://velog.io/@maintainker")}
        else if(v==="kakao"){window.open("https://open.kakao.com/me/maintainker");}
        else{window.open("https://maintainker.github.io/port2");}
    }


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
                <ul>{menu}</ul>
                
            </div>
            <ul className ="icons">
                <li onClick = {()=>window_open("github")}><FaGithub /></li>
                <li onClick = {()=>window_open("velog")}><FiBook /></li>
                <li onClick = {()=>window_open("kakao")}><div id="kakao">k</div></li>
            </ul>
        </div>
    </>);
}

export default Main;