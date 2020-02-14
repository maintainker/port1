import React from "react";
import Header from '../header';
import Coding from './coding'
import Standard from './standard'
import Responsible from './responsible';
import Clone from './clonecod';
import AnimaMain from './animation/animaMain';
import'./main.scss';
import styled from 'styled-components';
import Footer from '../footer'

const PortMain =({click_menu})=>{
    const ReactMain = styled.div`
        font-size : 100px;
        line-height:300px;
        color:#fff;
        text-align :center;
        position:relative;
        font-weight:bold;
        width:100%;
        height:300px;
    `;

    return (<div id="coding">
        <Header />
        <Coding/>
        <div className ="page">
            <Standard />
            <Responsible />
            <Clone />
            <AnimaMain />
            <ReactMain>React Code</ReactMain>
            <Footer name={"portfolio"} click_menu={click_menu}></Footer>
        </div>
    </div>);
}

export default PortMain;