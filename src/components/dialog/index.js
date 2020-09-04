import React,{useRef, useEffect} from 'react';
import styled from "styled-components";

const Dim = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    z-index:10000;
    background:rgba(0,0,0,0.7);
    display:${props=>props.display};
    .whiteBox{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        background:#fff;
    }
`;

const Dialog = ({children,closeDialog}) => {
    const dimRef = useRef();
    useEffect(()=>{
        dimRef.current.addEventListener("wheel",(e)=>{e.preventDefault()},false);
    },[])
    return(
    <Dim display={children? "block":"none"} ref={dimRef}>
        <div className="whiteBox">
            {children}
        </div>
    </Dim>);
}

export default Dialog;