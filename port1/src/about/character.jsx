import React from "react";
import styled from "styled-components";

const Character =() =>{
    //const [char,set_char]=useState([])
    const char= ["faithful","active","positive","friendly"];
    const habby= ["coding","marathon","music","boardgame"];
    const concern= ["good coding","my future","job","my parents"];
    const Box = ({cn,cr})=>{
        const Bo = styled.div`
            width : 300px;
            height : 450px;
        `;
        
        const Menu = ()=>{
            const me =  cr.map((v)=>{
                return(<li>{v}</li>);
            });
            return me;
        }
        return (<Bo className ={cn}>
            <ul>
                <li className="italic">{cn}</li>
                <Menu />
            </ul></Bo>)
    }

    return (
    <div className="char">
        <div>
            <Box cn="character" cr={char}/>
            <Box cn="habby" cr={habby}/>
            <Box cn="concern" cr={concern}/>
        </div>
    </div>);
}


export default Character;