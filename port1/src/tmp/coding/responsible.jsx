import React from "react";

const Responsible =() =>{

    const onclick = () =>{
        window.open("https://maintainker.github.io/ResponsibleWeb/");
    }


    return (<div className="responsible">
        <section>
            <img className="compu" src="./img/mockup3.jpg" alt="computer display"/>
            <img className="mobile" src="./img/mockup3-247.png" alt="mobile display"/>
        </section>
        <nav>
            <div className="card">
                <span className ="title orange">Responsible Web Site</span>
                <div className ="exp">
                    <span>WEBSITE</span><br/>
                    <span>CODING</span><br/>
                    <span>PROJECT</span>
                </div>
                <div className ="name">
                    <span>반응형 웹 코딩</span>
                    <span className ="link orange">https://maintainker.github.io/ResponsibleWeb/</span>
                </div>
                <div onClick={()=>onclick()}>
                    <span className="plus">+</span><span>View My Web Site.</span>
                </div>
            </div>
        </nav>
    </div>);
}

export default Responsible;