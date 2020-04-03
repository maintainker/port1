import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdArrowBack,MdArrowForward } from "react-icons/md";

const Footer =(name)=>{
    const Arrow = styled.div`
        border: 3px solid white;
        border-radius: 37px;
        height: 70px;
        width: 200px;
        color : white;
        line-height : 70px;
        text-align :center;
    `;
    const Footer = styled.div`position:relative`;
    const [menu,set_menu]=useState({prev:"p",next:"n",now:"main"});
    if(name.name ==="about"&&menu.prev!=="contact"){
        set_menu({prev:"contact",next:"portfolio",now:"about"});
    }else if(name.name ==="portfolio"&&menu.prev!=="about"){set_menu({prev:"about",next:"contact",now:"port"});console.log(menu);}   
    else if(name.name ==="contact"&&menu.prev!=="portfolio"){set_menu({prev:"portfolio",next:"about",now:"contact"});}   
    const onclick= useCallback((v)=>{
        let prev,next;
        if(menu.prev==="portfolio"){prev="port";}
        else{prev=menu.prev}
        if(menu.next==="portfolio"){next="port";}
        else{next=menu.next;}
        if(v==="prev"){name.click_menu(prev);}
        else if(v==="next"){name.click_menu(next);}
        else if(v==="now"){name.click_menu(menu.now);}
    },[menu,name]);
    
    return (<Footer id="footer">
        <Arrow className ="prev" onClick={()=>{onclick("prev")}}><div className="arrows"><MdArrowBack/></div> {menu.prev}</Arrow>
        <div className="arrows top" onclick={()=>{onclick("now")}}><MdArrowBack/></div> 
        <Arrow className="next" onClick={()=>{onclick("next")}}>{menu.next} <div className="arrows"><MdArrowForward/></div></Arrow>
    </Footer>);
}

export default Footer;