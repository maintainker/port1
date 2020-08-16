import React from "react";
import styled from 'styled-components';

const Card = styled.section`
    width:90%;
    height:75%;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    z-index:10;
    overflow:hidden;
    .leftBox{
        width:33.322%;
        height:100%;
        display:inline-block;
        background:rgb(71, 0, 204);
        position:relative;
        ul{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            font-size:0;
            li{
                display:block;
                margin-top:50px;
            }
            a{
                color:#fff;
                font-size:30px;
            }
        }
    }
    
    .rightBox{
        width:66.678%;
        height:100%;
        background:#fff;
        display:inline-block;
        vertical-align:top;
        span{
            display: block;
            text-align:center;
        }
    }
`;

const MiddleCard = ({usage,menu,right}) =>{
    // if
    const leftMenu = menu.map((v)=>{
        return <li key={v}><a href="/">{v}</a></li>
    })
    return(<Card>
        <article className="leftBox">
            <ul>
                {leftMenu}
            </ul>
        </article>
        <article className="rightBox">
            {right}
        </article>
    </Card>);
}

export default MiddleCard;

