import { FaGithub,FaFacebookSquare } from "react-icons/fa";
import React from "react";
const window_open = (v) =>{
    if(v==="github"){window.open("https://github.com/maintainker");}   
    else if(v==="facebook"){window.open("https://www.facebook.com/whitedevil0")}
    else if(v==="kakao"){window.open("https://open.kakao.com/me/maintainker");}
    else{window.open("https://www.naver.com");}
}
const Mainicon =()=>{
    return (<ul className ="icons">
        <li onClick = {()=>window_open("github")}><FaGithub /></li>
        <li onClick = {()=>window_open("facebook")}><FaFacebookSquare /></li>
        <li onClick = {()=>window_open("kakao")}><div id="kakao">k</div></li>
        </ul>);
}

export default Mainicon