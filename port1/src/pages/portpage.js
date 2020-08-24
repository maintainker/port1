import React,{useState} from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Card from "../components/card";
const NSHC = styled.article`
    margin-top:100px;
    position:relative;
    width:100%;
    header{
        text-align:center;
        color:#ffd94a;
        font-size:70px;
        margin-bottom:40px;
    }
    .cardSection{
        width:1080px;
        display:flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
`;


const Portcontents = () =>{
    const [controlStateDialog,setStateDialog] = useState({}); 
    const cardList ={
        Cipher:{
            category:"NSHC",
            title:"Encrypt/Decrypt",
            skill:"RSA/AES/window.crypto",
            link:"",
            img:"",
            script:"Javascript내에서 AES암호화 후 AES 암호화 키를 비대칭 암호화 방법인 RSA를 이용하여 암호화 하여 전달하고 다시 복호화 하는 방법을 직접 구현해보았습니다."
        },
        keypad:{
            category:"NSHC",
            title:"보안keypad",
            skill:"JIRA, Gitlab, Intelli J, es5",
            link:"",
            img:"",
            script:"기존 HTML 태그를 전부 내려주어 css까지 인라인 방식에서 입히던 방식에서 탈피하고자 고도화를 기획부터 배포까지 모두 담당하여 진행"
        },
        semina:{
            category:"NSHC",
            title:"암호 알고리즘 세미나",
            skill:"RSA, ECDH, AES",
            link:"",
            img:"",
            script:"외부 인증서 모듈과 연계과정에서 사내 암호학 이해도와 팀내 암호학 이해도를 높히기 위하여 도입을 위한 암복호화 알고리즘 세미나 진행"
        },
        algorithm:{
            category:"Study / Project",
            title:"알고리즘 스터디",
            skill:"Data Structure, Algorithm",
            link:"",
            img:"",
            script:"알고리즘에 관련된 다양한 자료구조를 직접 자바스크립트로 구현해보고 자바스크립트로 문제 해결능력까지 기를수 있도록 다양한 알고리즘 문제를 직접 풀어보았습니다."
        },
        danggn:{
            category:"Study / Project",
            title:"당근마켓 클론 프로젝트",
            skill:"ReactJS, Styled Components, axios",
            link:"",
            img:"",
            script:"당근마켓 앱에 있던 기능들을 웹에 입혀보자는 프로젝트로 github slack notion등의 협업툴을 사용하여 백앤드와 협업하여 api호출과 기능구현을 모두가 상의해서 기능구현을 해나가고 있습니다."
        },
        reactStudy:{
            category:"Study / Project",
            title:"reactStudy",
            skill:"ReactJS",
            link:"",
            img:"",
            script:"당근마켓을 하며 알고있다고 생각했던 React의 많은 부족한 부분을 발견하여 현재 8월 초부터 리액트 스터디를 시작하여 꾸준히 공부해나가고 있습니다."
        },
        WebStandard:{
            category:"Publishing",
            title:"Web Standard page",
            skill:"Html5, css3",
            link:"",
            img:"",
            script:"웹의 표준을 지키며 만든 페이지."
        },
        ResponsiveWeb:{
            category:"Publishing",
            title:"Responsive Web",
            skill:"Html5, css3, jQuery",
            link:"",
            img:"",
            script:"반응형을 고려하여 페이지의 크기가 변함에 따라 모양이 변하는 페이지."
        },
    }
    const openDialog = (title) => {
        title? setStateDialog(cardList.title):setStateDialog({});
    };
    return (
    <Layout script={"introducing my code"} page={"portfolio"} dialogContent={controlStateDialog.title? controlStateDialog:null}>
        <NSHC>
            <header className="italic">NSHC</header>
            <section className="cardSection">
                <Card openDialog={openDialog} title={"Cipher"}>{cardList["Cipher"].title}</Card>
                <Card openDialog={openDialog} title={"Cipher"}>{cardList["Cipher"].title}</Card>
                <Card openDialog={openDialog} title={"Cipher"}>{cardList["Cipher"].title}</Card>
            </section>
        </NSHC>
    </Layout>);
}



export default Portcontents;