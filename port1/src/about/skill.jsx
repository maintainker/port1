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
        </div>

    </div>);
}

export default Skill;