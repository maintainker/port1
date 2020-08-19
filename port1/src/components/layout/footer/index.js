import React,{useRef} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MdArrowBack,MdArrowForward } from "react-icons/md";
const Footer = styled.div`
    position:relative;
`;
const Arrow = styled.div`
        border: 3px solid white;
        border-radius: 37px;
        height: 70px;
        width: 200px;
        color : white;
        line-height : 64px;
        text-align :center;
        a{
            color:white;
        }
        svg{
            vertical-align:middle;
        }
    `;
const FooterDom =({children,toTheTop})=>{
    const page = {
        about :{prev:"contact",next:"portfolio"},
        portfolio :{prev:"about",next:"contact"},
        contact :{prev:"portfolio",next:"about"}
    };
    const nowDom = useRef();
    
    return (
        <Footer id="footer" ref={nowDom}>
            <Arrow className ="prev">
                <Link to={"/"+page[children].prev}>
                    <MdArrowBack/> {page[children].prev}
                </Link>
            </Arrow>
            <div className="arrows top" onClick={toTheTop}><MdArrowBack/></div> 
        
            <Arrow className ="next">
                <Link to={"/"+page[children].next}>
                     {page[children].next+" "}<MdArrowForward/>
                </Link>
            </Arrow>
        </Footer>);
}

export default FooterDom;