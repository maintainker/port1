import React from 'react';
import styled from "styled-components";
import Circle from './circle';
import circle from './circleslist'
const BackSide = styled.div`
    background-color: #000; 
    width: 100%; 
    height: 100vh;
    position: fixed; 
    z-index:—30;
    top: 0; 
    left: 0;
`;


const BackGround =() =>{
// color = white /yellow
// left, right => vw
// deg => 시초선을 기준으로 시계방향(cw)
// length=> 몇 vh 이동할것인가(기본 30)
// time => 몇초 왕복할것인가? (기본10s)
// children => 1/2/3(크기)
    let count = 0;
    const circles = circle.map((v)=>{
        return(
        <Circle key={count++} color={v.color} left={v.x} top={v.y} deg={v.degree}>{v.size}</Circle>
        )
    })
    return <BackSide>
        {circles}
    </BackSide>
}

export default BackGround;