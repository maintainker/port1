import React,{ useState, useEffect} from "react";
import './layout.scss';
import { Link } from "react-router-dom";
import styled from 'styled-components';
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
const Layout = ({page,script,children}) =>{
    const title ={about:"About me", portfolio:"PortFolio",contact:"Contact me"}
    const [active,set_active]=useState("wrap");
    const [disp,set_disp]=useState('none');
    const menu_list = ["about","portfolio","contact"];
    const toTheTop = ()=>{
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        toTheTop();
    },[]);

    const onclick =()=>{
        if(active === "wrap"){
            set_active("wrap active");
            set_disp('block');
        }
        else if(active === "wrap active"){
            set_active("wrap");
            set_disp('none')
        }
    }
    const Menulist =()=>{ 
        const me =menu_list.map((v)=><li >{v}</li>);
        return me;
    }
    const Menu = ({state}) =>{
        return (
        <MenuStyle style={{display:state}}>
            <ul className='hidden_menu'>
                <Menulist />
            </ul>
        </MenuStyle>)
    }

    return(
    <>
        <BackGround/>
        <div id='header'>
            <p className='italic'><Link to="/">Sul’s Portfolio</Link></p>
            <div className={active} onClick={()=>onclick()}>
                <div className='fall_down'  />
            </div>
            <Menu state={disp}/>
        </div>
        <div className ="firstPage">
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