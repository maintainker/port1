import React,{ useState, useEffect,useRef} from "react";
import './layout.scss';
import { Link } from "react-router-dom";
import styled,{keyframes} from 'styled-components';
import { FaAngleDown } from "react-icons/fa";
import BackGround from "../background"
import FooterDom from "./footer";

const MenuStyle = styled.div`
width : 100%; 
height : calc(100% - 150px);
margin-top: 151px;
position: fixed;
display:none;
top:0px;
left:0;
background: #000;
`;
const sliceBar = keyframes`
    0%{
        left:-10%;
        width:0%;
    }
    100%{
        left:-10%;
        width:120%;
    }
`;

const Header = styled.header`
    width:100%;
    height:60px;
    position:fixed;
    top:0;
    left:0;
    background:#000;
    border-bottom:1px solid #fff;
    z-index:1000;
    
    .container{
        margin: 0 15px;
        .menuOpen{
            float:left;
            height:60px;
            color:#fff;
            cursor:pointer;
            &:hover{
                a .hamburger{
                    .ham1{
                        opacity:1;
                        top:3px;
                    }
                    .ham2{
                        top:11px;
                    }
                    .ham3{
                        top:19px;
                    }
                    .ham4{
                        opacity:0;
                        top:27px;
                    }
                }
            }
            a{
                line-height:60px;
                .hamburger{
                    display:inline-block;
                    overflow: hidden;
                    position: relative;
                    vertical-align: middle;
                    width:58px;
                    height:28px;
                    padding: 0 20px;
                    span{
                        display: block;
                        width:18px;
                        height:2px;
                        background:#fff;
                        position:absolute;
                        transition:0.3s;
                    }
                    .ham1{
                        opacity:0;
                        top:-5px;
                    }
                    .ham2{
                        top:3px;
                    }
                    .ham3{
                        top:11px;
                    }
                    .ham4{
                        top:19px;
                    }
                }
            }
        }
        .italic{
            display:inline-block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
                white-space: nowrap;
            a{
                line-height:60px;
                font-size:1.7em;
            }
            &::before{
                content:"";
                position:absolute;
                top:50%;
                display: block;
                width:0;
                left:110%;
                height:1px;
                background:#fff;
                transition: 0.3s;
            }
            &:hover{
                &::before{
                    animation: ${sliceBar} 0.3s ease-in-out;
                    width:120%;
                    left:-10%;
                }
            }
        }
    }
`;
const SlideMenu = styled.nav`
    z-index:1001;
    position:fixed;
    background:#fff;
    width: 220px;
    left:-220px;
    top:60px;
    height: calc(100vh - 60px);
    transition: 0.5s;
    overflow:hidden;
    font-family:'NotoSansKR';
    font-weight :bold;
    &.active{
        left:0;
    }
    ul{
        padding:40px 20px;
        li{
            margin-bottom: 20px;
            &:hover{
                &::before{
                    animation: ${sliceBar} 0.3s ease-in-out;
                    width:120%;
                    left:-10%;
                }
            }
            a{
                letter-spacing : 0.1em;
                line-height:40px;
                padding-left:25px;
                span{
                    
                    position:relative;
                }
                span::before{
                    content:"";
                    position:absolute;
                    top:50%;
                    display: block;
                    width:0;
                    left:110%;
                    height:1px;
                    background:#000;
                    transition: 0.3s;
                }
                &:hover{
                    span::before{
                        animation: ${sliceBar} 0.3s ease-in-out;
                        width:120%;
                        left:-10%;
                    }
                }
            }
        }
    }
`;

const Layout = ({page,script,children,nextRef}) =>{
    const title ={
        about:"About me", 
        portfolio:"PortFolio",
        contact:"Contact me",
        github: "https://github.com/maintainker",
        blog : "https://velog.io/@maintainker",
        kakaoTalk : "https://open.kakao.com/me/maintainker"
    }
    const [active,setActive]=useState(false);
    const menuList = ["about","portfolio","contact"];
    const linkList = ["github","blog","kakaoTalk"];
    const [first,setfirst] = useState(true);
    const nowRef = useRef();
    const quickBtn = useRef();
    const quickMenu = useRef();
    let nowScroll = 0;
    const toTheTop = ()=>{
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        if(first){
            toTheTop();
            setfirst(false);
        }
        quickBtn.current.addEventListener("click",(e)=>{
            e.preventDefault();
            if(!active){
                setActive(true);
                quickMenu.current.classList.toggle("active");
            }else{
                setActive(false);
                quickMenu.current.classList.toggle("active");
            }
        })
        
        // nowRef.current.addEventListener("wheel",(e)=>{
            
        //     if(document.documentElement.scrollTop<nextRef.current.getBoundingClientRect().top && nowScroll<=document.documentElement.scrollTop){
        //         e.preventDefault();
        //         window.scrollTo({
        //             top: nextRef.current.getBoundingClientRect().top-150,
        //             left: 0,
        //             behavior: 'smooth'
        //           });
        //     }
        //     nowScroll = document.documentElement.scrollTop;
        // })
    },[]);


        const menu =menuList.map((v)=><li key = {v}><Link to={"/"+v}><span>{title[v]}</span></Link></li>);
        const link =linkList.map((v)=><li key = {v}><a href="#" onClick={()=>{
            window.open(title[v]);
        }}><span>{v}</span></a></li>);


    return(
    <>
        <BackGround/>
        <Header>
            <div className="container">
                <section className="menuOpen" ref={quickBtn}>
                    <a href="">
                        <span className="hamburger">
                            <span className="ham1"></span>
                            <span className="ham2"></span>
                            <span className="ham3"></span>
                            <span className="ham4"></span>
                        </span>
                    </a>
                    <span className="tit">Quick Menu</span>
                </section>
                <div className='italic'><Link to="/">Sul’s Portfolio</Link></div>
            </div>
        </Header>
        <SlideMenu ref={quickMenu}>
            <ul>
                {menu}
                {link}
            </ul>
        </SlideMenu>
        <div className ="firstPage" ref={nowRef}>
            <div className="title">
                <h1>{title[page]}</h1>
                <span>{script}</span>
            </div>

            <div className = "mouse"> 
                <div className="out">
                    
                </div>
                <div className="wheel"></div><br/>
                <span><FaAngleDown /></span>
                scroll down
            </div>
        </div>
        {children}
        <FooterDom toTheTop={toTheTop}>{page}</FooterDom>
    </>);
}


export default Layout;