import styled,{keyframes} from 'styled-components';

const Footer = styled.footer`
    position:relative;
    height: 200px; 
    width: 100%; 
    padding-bottom:60px;
    margin-top: 50px;
    .arrows{
        position: absolute; 
        cursor:pointer;
        top: 50px; 
        left: 50%; 
        box-sizing:border-box;
        transform: translate(-50%,-50%) rotate(90deg); 
        color: #fff; 
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        border: 3px solid #fff;
        text-align: center; 
        line-height: 60px;
    }
    .copyRight{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        color:#fff;
        line-height:60px;
        text-align:center;
    }
`;

const Arrow = styled.div`
        border: 3px solid white;
        border-radius: 37px;
        box-sizing:border-box;
        height: 70px;
        width: 200px;
        color : white;
        line-height : 70px;
        text-align :center;
        top: 50px; 
        transform: translateY(-50%); 
        position: absolute; 
        cursor: pointer;
        &.prev {
            left: 50px; 
        }
        &.next {
            right: 50px; 
        }
        a{
            color:white;
        }
        svg{
            vertical-align:middle;
        }
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
                .hamSection .hamburger{
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
            .hamSection{
                display:inline;
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
                        border-radius:2px;
                        overflow: hidden;
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
            a.active span::before{
                animation:none;
                content:"";
                position:absolute;
                top:50%;
                display: block;
                width:120%;
                left:-10%;
                height:1px;
                background:#000;
            }
        }
    }
`;
const wheel = keyframes`
    0%{
        top:10%; 
        opacity: 1;
    }
    100%{
        top:50%; 
        opacity: 0;
    }
`;
const FirstPage= styled.section`
    position: relative; 
    height: calc(100vh - 60px); 
    margin-top: 60px; 
    width: 100%;
    .title {
        display: block; 
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%,-80%); 
        text-align: center;
        h1{
            font-size: 90px; 
            color: white; 
        }
        span{
            color: white; 
            font-size: 27px; 
        }
    }
    .mouse{
        position: absolute; 
        left: 50%; 
        bottom: 20px; 
        transform: translateX(-50%); 
        color: #fff; 
        text-align: center;
        .out{
            width: 20px; 
            position: absolute; 
            left: 50%; 
            transform: translateX(-50%); 
            bottom: 70px;  
            height: 30px; 
            border: 3px solid #888; 
            border-radius: 20px 20px 10px 10px;
            &::before {
                position: absolute;
                left: 50%; 
                transform: translateX(-50%); 
                top: 10%; 
                animation: ${wheel} 2s ease-in-out 0.5s infinite;  
                content: "";
                width: 3px; 
                height: 10px; 
                background-color: #888;
            }
            &::after {
                position: absolute;
                top: -10px;
                left: 50%; 
                transform: translateX(-50%); 
                content: "";
                width: 3px; 
                height: 10px; 
                background-color: #888;
            }
        }
        span {
            top: -20px; 
            left: 50%; 
            transform: translateX(-50%); 
            display: block; 
            position: absolute; 
            font-size: 40px; 
            font-weight: 200;
        }
    }

`;
const DetailPort = styled.div`
    width:500px;
    height: 650px;
    text-align:center;
    box-sizing: border-box;
    padding:30px 30px;
    img{
        display: inline-block;
        width:400px;
        height:250px;
    }
    .close{
        cursor:pointer;
        width:35px;
        height:35px;
        position:absolute;
        top:5px;
        right:-50px;
        cursor:pointer;
        &::before{
            content:"";
            width:35px;
            height:1px;
            background-color:#fff;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%) rotate(45deg);
        }
        &::after{
            content:"";
            width:35px;
            height:1px;
            background-color:#fff;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%) rotate(-45deg);
        }
    }
    section {
        margin-top:10px;
    }
    .detailScript{
        display: inline-block;
        box-sizing: border-box;
        padding: 0 20px 0 50px;
        height:300px;
        vertical-align:top;
        text-align:left;
        h1{
            text-align:center;
            font-size:35px;
            margin-bottom:20px;
        }
        
        h2{
            margin-bottom:10px
        }
        .description,.link{
            margin-top:30px;
        }
    }
`;

const layoutStyle = {
    Footer,Arrow,sliceBar,Header,SlideMenu,FirstPage,DetailPort
}


export default layoutStyle;