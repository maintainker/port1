import React from "react";
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

    return (
    <Layout script={"introducing my code"} page={"portfolio"}>
        <NSHC>
            <header className="italic">NSHC</header>
            <section className="cardSection">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
        </NSHC>
    </Layout>);
}



export default Portcontents;