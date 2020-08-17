import React from 'react';
import Circle from './circle';
import circle from './circleslist'
import './main.scss';



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
    return <div id='bg'>
        {circles}
    </div>
}

export default BackGround;