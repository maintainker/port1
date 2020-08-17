import React from "react";
import Header from "./components/header"
import Firstpage from "./components/first"
import BackGround from "../background"

const Layout = ({children,script}) =>{


    return(
    <>
        <BackGround/>
        <Header/>
        <Firstpage script={script}>{children}</Firstpage>
    </>);
}


export default Layout;