import React from "react";
import Circle from "./circle";
const Skill =()=>{
    return(<div className="skill">
        <span className="italic">Skill</span>
        <div className="box">
            <div className="html"><Circle skill="HTML" count="95"/></div>
            <div className="css"><Circle skill="CSS" count="95"/></div>
            <div className="javascript"><Circle skill="JS" count="95"/></div>
            <div className="react"><Circle skill="React" count="85"/></div>
            <div>
                <ul>
                    <li>HTML5 및 XHTML 페이지 제작</li>
                    <li>모바일 페이지 제작</li>
                    <li>웹 접근성 및 웹 표준</li>
                </ul>
                <ul>
                    <li>CSS3 (Flexbox 포함)</li>
                    <li>반응형 레이아웃</li>
                    <li>브라우저 호환성 관리</li>
                    <li>Sass를 사용 경험</li>
                </ul>
                <ul>
                    <li>Vanilla JavaScript <br/>(ES6 활용 가능)</li>
                    <li>jQuery </li>
                    <li>AJAX 사용 경험</li>
                    <li>C언어 경험인한 type관리</li>
                </ul>
                <ul>
                    <li>SPA 제작 가능</li>
                </ul>
            </div>
        </div>

    </div>);
}

export default Skill;