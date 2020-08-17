import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
import Layout from "../components/layout"


// import Header from "../components/layout/components/header";
// import Footer from "../components/layout/components/footer";
// import Main from "./AbMain";
// import Charater from "./character";
// import Skill from "./skill";

const About = ({history}) =>{
    useEffect(()=>{
        console.log(thisBody.current)
    },[])
    const thisBody = useRef();
    console.log(history)
    const script = "introducing me";
    return (<div id ="about" >
        <Layout script={script} ref={thisBody}>About Me</Layout>
        
        {/* 
        <Main />
        <Charater />
        <Skill/>
        <Footer name = {"about"} click_menu={click_menu}/> */}

    </div>);
}


export default About;