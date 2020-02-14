import React from "react";
import Header from "../header";
import Footer from "../footer";
import Main from "./CoMain";
 

const Contact = ({click_menu}) =>{
    return (<div id ="contact">
        <Header />
        <Main />
        <Footer name = {"contact"} click_menu={click_menu}/>
    </div>);
}


export default Contact;