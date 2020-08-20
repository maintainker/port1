import React,{useRef} from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Circle from "../components/circle"

const Iam = styled.section`
    width:100%;
    height:100vh;
    position:relative;
    header{
        margin-top: 100px;
        text-align:center;
        
    }
    article{
        width:1080px;
        margin:100px auto 0;
        span,a{
            color:#fff;
            
        }
    }
`;
const Skill = styled.section`
    width: 100%; 
    height: calc(90vh - 150px); 
    position: relative; 
    text-align: center;
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
    div{
        position: relative; 
        display: inline-block;
        width: 300px; 
        height: 210px;
    }
`;



const About = ({history}) =>{
    const script = "introducing me";
    const page = "about";
    const nextRef = useRef();
    return (<div id ="about" style={{scrollBehavior: "smooth"}} >
        <Layout script={script} page={page} nextRef={nextRef}>
            <Iam ref={nextRef}>
                
            <header className="italic">Who Is SSUL?</header>
                <article>
                    <span>
                        안녕하세요. 2020/4/1에 시작한 늦깎이 웹 프론트엔드 개발자 설영환입니다.<br/>
                        대학생 때 알바부터 시작한 강사라는 직업이 저에게는 할수 있는 유일한 일이되어 7년간 해오게 되었습니다.<br/>
                        하지만 어느순간부터는 저는 평생 이일을 할수 있을지는 의문을 가지게 되어 방황을 잠깐하였고 다른일을 찾으려 많은 노력을 했습니다.<br/>
                        저에게 미래가 있는 일을 찾아보았고 제가 대학생때 제일 재미있게 했던 c언어의 기억으로 2019년 11월부터 HTML부터 시작하게 되었습니다. <br/>
                        그리고 2019년 대학교를 재입학으로 다시 다니게 되어 1년간 네트워크 위주의 수업을 듣고 
                        2020년 2월 졸업을 할수 있었습니다. <br/>현재는 4월부터 NSHC에 입사하여 웹 보안부서인 Open Web nFiler에서 웹 보안 엔지니어이자 개발자 업무로써 주로 고객사 측의 View에 관련된 issue 뿐만아니라 자바, 암호학등 공부를 
                        열심히 하고있습니다. <br/>회사에서는 기존의 서버에서 html tag를 내려주어 인라인으로 모든 css가 정해진 방식을 탈피하여 고객이 css를 조정가능한 키패드를 제작 하는 프로젝트를 OJT세미나로써 발표했습니다.
                        이후 기획부터 제작 테스트 제가 모두 담당하였고 9월 배포를 위해 개발중에 있습니다. <br/>추가적으로 회사에서는 저를 좋게 봐주어 1~2주에 한번씩 팀내 세미나를 주최하여 웹 보안(Javascript)에서의 암호화 복호화 방법을 이용한 인증서 모듈과 연동방법등을 발표하고 있습니다.<br/>
                        회사가 끝나도고 전문성을 갖추려고 지속적으로 공부하여 저희 사수님께서 본인보다 자바스크립트 개발은 더 잘한다고 말해주고 개발쪽은 믿어주실 정도로 열심히 하려고 노력중입니다. <br/>
                        
                        추가적으로는 알고리즘 스터디를 이제 막 종료하고, React 스터디를 꾸준히 하고있습니다. 현재 React에 typescript를 도입하려 노력중에 있습니다. 그리고 React로 당근마켓 프로젝트도 따로 하고있습니다. <br/>
                        자료구조 알고리즘 스터디를 통해 공부한 내용은 꾸준히 블로그(<strong><a href="https://velog.io/@maintainker">https://velog.io/@maintainker</a></strong>)에 작성하려고 노력하고 있습니다.

                    </span>
                </article>
            </Iam>
            <Skill className="skill">
                <span className="italic">Skill</span>
                <div className="box">
                    <Circle skill="CSS" count="90"/>
                    <Circle skill="JS" count="95"/>
                    <Circle skill="React" count="90"/>
                    <Circle skill="TS" count="85"/>
                </div>
            </Skill>
        </Layout>

    </div>);
}


export default About;