import React from "react";

const Standard =() =>{

    const onclick =()=>{
        window.open("https://maintainker.github.io/webStandard/");
    }

    return (<div className="standard">
        <section>
            <img className="img1" src='./img/standard1.png' alt="standard1"/>
        </section>
        <nav>
            <div className="card">
                <span className ="title orange">Web Standard</span>
                <div className ="exp">
                    <span>WEBSITE</span><br/>
                    <span>CODING</span><br/>
                    <span>PROJECT</span>
                </div>
                <div className ="name">
                    <span>웹사이트 표준 코딩</span>
                    <span className ="link orange">https://maintainker.github.io/webStandard/</span>
                </div>
                <div className="link" onClick={()=>onclick()}>
                    <span className="plus">+</span><span>View My Web Site.</span>
                </div>
            </div>
        </nav>
    </div>);
}

export default Standard;