import React from "react";
import Header from "../header";
import Footer from "../footer";
import Main from "./CoMain";
import FootCon from "./footcon";

const Contact = ({click_menu}) =>{
    return (<div id ="contact">
        <Header click_menu={click_menu}/>
        <Main />
        <FootCon/>
        <Footer name = {"contact"} click_menu={click_menu}/>
    </div>);
}


export default Contact;