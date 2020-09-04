import React,{useRef, useEffect} from "react";
import styled from "styled-components";
import Layout from "../components/layout";
const SendingMailSection = styled.section`
    position:relative;
    width:1080px;
    margin:100px auto 40px;
    input,textarea {
        padding:5px;
        display:block;
        width:500px;
        margin: 0 auto 20px;
    }
    textarea{
        height:300px;
    }
    button{
        display:block;
        margin:0 auto;
        width:500px;
        height:50px;
        background: rgb(0, 11, 112);
        color:#fff;
        font-size:20px;
        outline: 0;
        border: 0;
        cursor: pointer;
    }
`;
const Contactcontents = ({openDialog}) =>{
    const btnSendMail = useRef();

    const sendingMail =()=>{ 
        let formData = new FormData();
        formData.append('name',document.querySelector("#contact .mailName").value);
        formData.append('company', document.querySelector("#contact .mailCompany").value);
        formData.append('email',document.querySelector("#contact .mailAddress").value);
        formData.append('message', document.querySelector("#contact .mailmessage").value);
        fetch("https://script.google.com/macros/s/AKfycbzDJy7_wH8UastXxrytEnUjfT-xFridRB7dcpJSit0BhQaj-uE/exec", {
            method: 'POST', 
            body: formData, 
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }      

    useEffect(()=>{
        btnSendMail.current.addEventListener("click",sendingMail);
    })

    return (
    <Layout script={"introducing my code"} page={"contact"} closeDialog={()=>openDialog()}>
        <SendingMailSection id="contact">               
            <input className="mailCompany" placeholder="회사이름 ex. NSHC"/> 
            <input className="mailName" placeholder="이름 ex. 설영환 연구원"/>      
            <input className="mailAddress" placeholder="email이나 연락처 남겨주시면 확인하는대로 바로 연락드리겠습니다."/>
            <textarea className="mailmessage" placeholder="보낼내용 "/>     
            <button ref={btnSendMail}>보내기</button>
        </SendingMailSection>
    </Layout>);
}



export default Contactcontents;