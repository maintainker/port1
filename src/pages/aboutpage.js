import React,{useRef} from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { useEffect } from "react";

const Iam = styled.section`
    width:1080px;
    position:relative;
    margin : 0 auto 200px;
    header{
        margin: 100px 0;
        text-align:center;
        color:#ffd94a;
        font-size:70px;
        
    }
    article{
        color : #fff;
        vertical-align: top;
        width:500px;
        display:inline-block;
        margin: 50px 0 0 0;
        h3{
            font-size:25px;
            text-align:center;
            margin-bottom:30px;
        }
        li{
            margin-bottom:10px;
        }

    }
`;
const Skill = styled.section`
    width: 100%; 
    height: calc(90vh - 150px); 
    position: relative; 
    text-align: center;
    header{
        color:#ffd94a;
        font-size:70px;
        margin-bottom:40px;
    }
    .skillStack{
        display:block;
        width:1070px; 
        margin:0 auto;
        color: #fff;
        li{
            margin-bottom:20px;
            display: flex;
            width:100%;
            position:relative;
            .skillName{
                display: flex;
                width : 150px;
                height:40px;
                line-height:40px;
            }
            .skillBarGround{
                position:absolute;
                box-sizing:border-box;
                left:150px;
                top:50%;
                transform:translateY(-50%);
                display: flex;
                overflow:hidden;
                box-sizing:border-box;
                border:1px #ddd solid;
                height: 20px;
                width:calc(100% - 150px);
                border-radius:5px;
                .skillBar{
                    position:absolute;
                    left:0;
                    height:100%;
                    background:linear-gradient(90deg,#ddd,#ffd94a);
                    line-height:18px;
                    box-sizing:border-box;
                    padding-right:25px;
                    text-align:right;
                    color:#000;
                    transition:3s;
                    border-radius:5px;
                    span{
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        transform: translateY(calc(-50% + 2px));
                    }
                }
            }
        }
    }
    .box{
        position: relative; 
        top: 35%; 
        transform: translateY(-50%); 
        width: 1220px; 
        height: 210px; 
        margin: 0 auto; 
        text-align: center;
        
        section{
            margin-left:100px;
            
        }
        section:first-child{
            margin-left:0;
        }
    }
`;



const AboutContents = () =>{
    const script = "introducing me";
    const page = "about";
    const nextRef = useRef();
    const skillUl = useRef();
    useEffect(()=>{
        
    })
    const skillList = [
        {name:"HTML5",percent : 90},
        {name:"Css3",percent : 85},
        {name:"Javascript/ES6",percent : 95},
        {name:"React",percent : 90},
        {name:"Typescript",percent : 85},
        {name:"Redux",percent : 80},
        {name:"JAVA",percent : 80},
        {name:"Algorithm",percent : 85},
    ];
    const skillStack = skillList.map((v)=>{
        return(
        <li key={v.name}>
            <div className="skillName">{v.name}</div>
            <div className="skillBarGround"><div className="skillBar" style={{width:`${v.percent}%` }}><span>{v.percent}%</span></div></div>
        </li>)
    });

    return (
    <div id ="about" style={{scrollBehavior: "smooth"}} >
        <Layout script={script} page={page} nextRef={nextRef}>
            <Iam ref={nextRef}>
            <header className="italic">Who Is SSUL?</header>
                <article style ={{marginRight:"70px"}}>
                    <h3>I AM</h3>
                    <span>
                        저의 좌우명은 일신 우일신 입니다. 매일 하루하루 어제보다 발전하는 사람이 되자라는 생각으로 매일 저를 단련하고 
                        실력을 올려서 더 나은 사람이 되고자 매일 노력하고 있습니다. 
                        작년부터 Html부터 시작하여 현재 리액트로 팀 프로젝트를 하고 있고, 이번에 기회를 얻어 우아한 테크러닝에 React + Typescript를
                        적용한 강의를 들으며 현재는 react 프로젝트에 타입스크립트를 도입하여 하고있습니다.
                        제가 학원강사 하면서 결국에 잘하는 애들은 잠깐 열심히 하는 애들보다 매일 꾸준히 하는 애들이 결국 잘하는 걸 느꼈습니다.
                        저는 잠깐의 반짝함이 아닌 꾸준함을 장착한 개발자가 되도록 노력하겠습니다.
                    </span>
                </article>
                <article>
                    <h3>Career</h3>
                    <ul>
                        <li>서울시립대학교 전자전기 컴퓨터공학부 졸업(2020.03)</li>
                        <li>NSHC xProtect팀 Web 보안 키패드 담당(2020.04 ~ 재직중)</li>
                        <li>우아한 테크러닝 3기 수강중 (2020.09 ~ 2020.09.10)</li>
                        <li>React Study 운영중 (2020.08 ~ )</li>
                    </ul>
                </article>
            </Iam>"
            <section className="career">
                <header className="italic">Career</header>
                <div></div>
            </section>
            <Skill className="skill">
                <header className="italic">Skill</header>
                <ul className="skillStack" ref={skillUl}>
                    {skillStack}
                </ul>
                
            </Skill>
        </Layout>
    </div>);
}


export default AboutContents;