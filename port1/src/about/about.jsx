import React from "react";
import Header from "../header";
import Footer from "../footer";
import Main from "./AbMain";
import Charater from "./character";
import Skill from "./skill";

const About = ({click_menu}) =>{
    return (<div id ="about">
        <Header />
        <Main />
        <Charater />
        <Skill/>
        <Footer name = {"about"} click_menu={click_menu}/>

    </div>);
}


export default About;