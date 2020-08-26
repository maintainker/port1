import React, { useEffect,useRef } from "react"
import styled from "styled-components";

const Cardstyle = styled.div`
    width:300px;
    height:200px;
    margin-right: 50px;
    position:relative;
    cursor:pointer;
    &:nth-child(3n){
        margin-right:0; 
    }
    .contents{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:${(v)=> v.imgUrl? "no-repeat center url("+v.imgUrl+")":"rgb(4, 2, 126)"};
		background-size : 100% 120%;
        text-align:center;
        p{
            display:none;
            color:white;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:1;
        }
    }
    .dim{
        width:100%;
        height:100%;
        background:rgb(0,0,0);
        opacity:0;
        transition:0.3s;
    }
    .border{
        width:calc(100% - 24px); 
        height:calc(100% - 24px);
        position:absolute;;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        &::before{
            content:"";
            width: 0;
            height: 0;
            position: absolute;
            top:0;
            left:0;
            border: 2px #fff solid;
            border-bottom-color: transparent;
            border-right-color: transparent;
            box-sizing:border-box;
            transition:0.3s ease;
        }
        &::after{
            content:"";
            width: 0;
            height: 0;
            position: absolute;
            bottom:0;
            right:0;
            border: 2px #fff solid;
            border-top-color: transparent;
            border-left-color: transparent;
            box-sizing:border-box;
            transition:0.3s ease;
        }
    }
    &:hover{ 
        .contents p{
            display: block;
        }
        .dim{
            opacity:0.7;
        } 
        .border{
            &::before{
                width: calc(100% + 5px);
                height: calc(100% + 5px);
            }
            &::after{
                width: calc(100% + 5px);
                height: calc(100% + 5px);
            }
        }
    }
`;


const Card = ({openDialog,title,children})=>{
    const cardRef = useRef();
    useEffect(()=>{
        cardRef.current.addEventListener("click",()=>{
            openDialog(title);
        })
    },[openDialog,title]);
    return (
        <Cardstyle imgUrl={children.img} ref={cardRef}>
            <div className="contents">
                <p>{children.title}</p>
            </div>
            <div className="dim"></div>
            <div className="border"></div>
        </Cardstyle>
    );
}

export default Card