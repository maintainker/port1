import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";

const Circle =(color)=>{
    const [size,set_size]=useState("");
    const [c_color,set_color]=useState("rgb(255, 217, 74)");
    const [cl_name]=useState("ball deg"+color.deg)
    //size
    if(color.children === "1"&&size!=="2.5px"){set_size("2.5px");} 
    else if(color.children === "2"&&size!=="9px"){set_size("9px"); } 
    else if(color.children === "3"&&size!=="15px"){set_size("15px"); } 
    /*.deg34{ transform: scale(0.521681); transition: 0.3s ; animation: deg32 3.5s ease-in-out 0.1s infinite;}

    @keyframes deg32{
    0%{left: 50px;}
    50%{left: 0;}
    100%{left:50px}
    }
    */
    const deg_x = 30*Math.cos(Math.PI*color.deg/180);
    const deg_y = 30*Math.sin(Math.PI*color.deg/180);
    //console.log(deg_x,deg_y);
   
    const move = keyframes`
        0% {left:${color.left}vw; top:${color.top}vh;}
        50%{left:${color.left+deg_x}vw; top:${color.top+deg_y}vh;}
        100% {left:${color.left}vw; top:${color.top}vh;}
    `;
    
    
    
    //color
    if(color.color==="yellow"&&c_color!=="rgb(255,217,74)"){set_color("rgb(255,217,74)");}
    else if(color.color==="white"&&c_color!=="rgb(255,255,255)"){set_color("rgb(255,255,255)");}

    const Bgc= styled.div`
        animation:${move} 10s ease-in-out infinite;
        background: ${c_color};
        left: ${color.left+"vw"};
        top: ${color.top+"vh"}; 
        width: ${size};
        height: ${size};
        z-index:1;`
        
    return (
        <Bgc className={cl_name}></Bgc>
   );

}


export default Circle;