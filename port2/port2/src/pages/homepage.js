import React, { useState } from "react";
import styled from "styled-components";
import MiddleCard from "../components/middleCard";
import playImg from "../assets/img/play.png";
const MainStyle = styled.section`
    width:100%;
    position: relative;
    .leftBack{
        width : 35%;
        height: 100vh;
        background:rgb(12, 0, 54);
        display:inline-block;
    }
    .rightBack{
        width : 65%;
        height: 100vh;
        background:#ddd;
        display:inline-block;
    }
    .triangle{
        margin : 0 auto;
        width:300px;
        height:300px;
        background:url(${playImg}) no-repeat  center;
        background-size:160%;
    }
`;

const Home = () =>{
    const [music,setMusic] = useState(false);
    const menu = ["About me","Portfolio","Contact me"];
    const IntroducingMe = () =>{
        return (<>
                <div className={music? "twoBar":"triangle"}><div></div></div>
                <span>
                    I am Front-End Developer <br/>
                    <strong>Press the Button</strong><br/>
                    I'm actively seeking my new Job
                </span>
            </>
        )
    }
    return(
    <MainStyle>
        <div className="leftBack">
        </div>
        <div className="rightBack">
        </div>
        <MiddleCard usage={"main"} menu={menu} setMusic={setMusic} right={IntroducingMe()}></MiddleCard>
    </MainStyle>
    );
}


export default Home;