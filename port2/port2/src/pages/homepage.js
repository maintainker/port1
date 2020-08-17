import React, { useState,useEffect,useRef } from "react";
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
        margin : 100px auto 0;
        width:300px;
        height:300px;
        background:url(${playImg}) no-repeat  ;
        background-size:160%;
        background-position-x: 31%,38%;
        background-position-y: 32%;
    }
    .twoBar{
        height:200px;
        width:200px;
        position:relative;
        margin:140px auto 0;
        &::before{
            content: "";
            position: absolute;
            width: 65px;
            height: 100%;
            display: block;
            background: rgb(71, 0, 204);
            top: 0;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            width: 65px;
            height: 100%;
            display: block;
            background: rgb(71, 0, 204);
            top: 0;
            right: 0;
        }
    }
`;

const Home = () =>{
    const musicBox = useRef();
    const [music,setMusic] = useState(false);
    useEffect(()=>{
        musicBox.current.addEventListener("click",(e)=>{
            switch (e.target.classList.value) {
                case "triangle":
                    setMusic(true)
                    break;
                case "twoBar":
                    setMusic(false)
                    break;
                default:
                    break;
            } 
        })
    },[musicBox])
    const menu = ["About me","Portfolio","Contact me"];
    const IntroducingMe = () =>{
        return (<>
                <div className={music? "twoBar":"triangle"} ref={musicBox}></div>
                <span>
                    I am Front-End Developer. <br/>
                    <strong>Press the Button!</strong><br/>
                    I'm actively seeking my new Job.
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