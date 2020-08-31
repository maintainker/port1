import React,{useState} from "react";
import styled from "styled-components";
import Layout from "../components/layout";
const Contactcontents = ({openDialog}) =>{
    function sendMail() {
        var link = "mailto:syhwan@kakao.com"
                 + "?cc=myCCaddress@example.com"
                 + "&subject=" + escape("This is my subject")
                 + "&body=" + escape("test1")
        ;
        
        window.location.href = link;
    }
    sendMail();
    return (
        
    <Layout script={"introducing my code"} page={"contact"} closeDialog={()=>openDialog()}>

    </Layout>);
}



export default Contactcontents;