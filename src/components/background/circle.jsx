import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";

const BackgroundCircle= styled.div`
    animation:${props => props.move} ${props => props.time}s ease-in-out infinite;
    background: ${props => props.c_color};
    left: ${props => props.left+"vw"};
    top: ${props => props.top+"vh"}; 
    width: ${props => props.size};
    height: ${props => props.size};
    z-index:1;
    position: fixed; 
    border-radius: 100%; 
    opacity: 0.7;
`
const Circle =(color)=>{
    const [size,set_size]=useState("2.5px");
    const [c_color,set_color]=useState("rgb(255, 217, 74)");
    const [cl_name]=useState("deg"+color.deg)
    //size
    if( String(color.children) === "1" && size!=="2.5px"){set_size("2.5px");} 
    else if( String(color.children) === "2" && size!=="9px"){set_size("9px"); } 
    else if( String(color.children) === "3" && size!=="15px"){set_size("15px"); } 

    let length = color.length;
    if (length===undefined){length=30;}
    const deg_x = length*Math.cos(Math.PI*color.deg/180);
    const deg_y = length*Math.sin(Math.PI*color.deg/180);
   
    const move = keyframes`
        0% {left:${color.left}vw; top:${color.top}vh;}
        50%{left:${color.left+deg_x}vw; top:${color.top+deg_y}vh;}
        100% {left:${color.left}vw; top:${color.top}vh;}
    `;
    
    //color
    if(color.color==="yellow"&&c_color!=="rgb(255,217,74)"){set_color("rgb(255,217,74)");}
    else if(color.color==="white"&&c_color!=="rgb(255,255,255)"){set_color("rgb(255,255,255)");}

        
    return (
        <BackgroundCircle className={cl_name}
        time={color.time? color.time:10}
        move={move}
        size ={size}
        left = {color.left}
        top = {color.top}
        c_color = {c_color}
        ></BackgroundCircle>
   );

}


export default Circle;