import React from "react";
import styled from "styled-components";
import "./circle.scss"

const Circle =({skill,count})=>{

    const Cir = styled.section`
        height:200px;
        width:200px;
        border : 10px solid white;
        display:inline-block;
        border-radius :50%;
    `;
    
//
//        
        
    return (<Cir className="circle">
            <div className="twelv_six"/>
            <div className="thre_nine" />
            <div className="five_fifty" />
            <div className="ten_sixty" />
            <div className="fifte_sixtyfi" />
            <div className="twenty_seventy" />
            <div className="twenty_seventy" />
            <div className="minus_five_fifty" />
            <div className="minus_ten_sixty" />
            <div className="minus_fifte_sixtyfi" />
            <div className="minus_twenty_seventy" />
            <div className="minus_twenty_seventy" />
            <div className="skilll"><span>{skill}</span></div>
            <div className="count"><span>{count}%</span></div>
        </Cir>);


}

export default Circle;