import React,{  useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import { MdArrowBack,MdArrowForward } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import BackGround from "../background"
import layoutStyle from "../../assets/style/layoutStyle";
const { Footer,Arrow,Header,SlideMenu,FirstPage} = layoutStyle;
console.log(Footer)


const Layout = ({page,script,children,nextRef}) =>{
    const pageList = {
        about :{prev:"contact",next:"portfolio"},
        portfolio :{prev:"about",next:"contact"},
        contact :{prev:"portfolio",next:"about"}
    };
    const nowDom = useRef();
    const title ={
        about:"About me", 
        portfolio:"PortFolio",
        contact:"Contact me",
        github: "https://github.com/maintainker",
        blog : "https://velog.io/@maintainker",
        kakaoTalk : "https://open.kakao.com/me/maintainker"
    }
    const menuList = ["about","portfolio","contact"];
    const linkList = ["github","blog","kakaoTalk"];
    const nowRef = useRef();
    const quickBtn = useRef();
    const quickMenu = useRef();
    const toTheTop = ()=>{
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        toTheTop();
        quickBtn.current.addEventListener("click",(e)=>{
            e.preventDefault();
            quickMenu.current.classList.toggle("active");
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


        const menu =menuList.map((v)=><li key = {v}><Link to={"/"+v} className={page===v? "active":null}><span>{title[v]}</span></Link></li>);
        const link =linkList.map((v)=><li key = {v}><a href="/" onClick={(e)=>{
            e.preventDefault();
            window.open(title[v]);
        }}><span>{v}</span></a></li>);


    return(
    <>
        <BackGround/>
        <Header>
            <div className="container">
                <section className="menuOpen" ref={quickBtn}>
                    <div className="hamSection">
                        <span className="hamburger">
                            <span className="ham1"></span>
                            <span className="ham2"></span>
                            <span className="ham3"></span>
                            <span className="ham4"></span>
                        </span>
                    </div>
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
        <FirstPage className ="firstPage" ref={nowRef}>
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
        </FirstPage>
        {children}
        <Footer id="footer" ref={nowDom}>
            <Arrow className ="prev">
                <Link to={"/"+pageList[page].prev}>
                    <MdArrowBack/> {pageList[page].prev}
                </Link>
            </Arrow>
            <div className="arrows top" onClick={toTheTop}><MdArrowBack/></div> 
        
            <Arrow className ="next">
                <Link to={"/"+pageList[page].next}>
                     {pageList[page].next+" "}<MdArrowForward/>
                </Link>
            </Arrow>
            <div className="copyRight">
                Copyright 2020. Web Front-end developer portfolio by SSul
            </div>
        </Footer>
    </>);
}


export default Layout;