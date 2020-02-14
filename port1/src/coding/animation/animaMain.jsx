import React from "react";
import styled from "styled-components";


const AnimaMain =() =>{
    const Main = styled.div`
        width: 100%;
        height : calc(100vh - 150px);    
        position: relative;
        `;
    const And=styled.span`
        font-size : 500px;
        color : #fff;
        z-index :0;
        opacity: 0.3;
        position : absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        `;
    const YellowBox = styled.div`
        color:#ffd94a;
        opacity:0.9;
        position : absolute;
        top:50%;
        left:50%;
        line-height: 80px;
        font-weight:bold;
        font-size:60px;
        text-align :center;
        transform: translate(-50%,-50%);
        span{display:block;}
        div{color:white;position:absolute; width:200px; left:50%; transform: translateX(-50%);bottom:-80px; font-size:27px;line-height:27px;}
    `;
    return (<Main>
        <And className="italic">&amp;</And>
        <YellowBox>
            <span>Creative</span>
            <span>Stratagically</span>
            <span>Deliberate</span>
            <span>Passionate</span>
        <div className="italic">the most personal is<br/> the most creative</div>
        </YellowBox>
    </Main>)
}

export default AnimaMain;