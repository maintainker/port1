import React from "react";

const PosterShopping =() =>{

    const onclick = () =>{
        window.open("https://maintainker.github.io/iframetest/reactpage/build/index.html");
    }


    return (
    <div className="responsible">
        <section>
            <img className="compu" src="./img/mockup3.jpg" alt="computer display"/>
            <img className="mobile" src="./img/mockup3-247.png" alt="mobile display"/>
        </section>
        <nav>
            <div className="card">
                <span className ="title orange">React Web Site</span>
                <div className ="exp">
                    <span>React</span><br/>
                    <span>CODING</span><br/>
                    <span>PROJECT</span>
                </div>
                <div className ="name">
                    <span>리액트로 제작한 PosterShopping page</span>
                    <span className ="link orange">https://maintainker.github.io/iframetest/reactpage/build/index.html</span>
                </div>
                <div onClick={()=>onclick()}>
                    <span className="plus">+</span><span>View My Web Site.</span>
                </div>
            </div>
        </nav>
    </div>);
}

export default PosterShopping;