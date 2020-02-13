import React from "react";
import Header from './header';
import Coding from './coding'
import Standard from './standard'
import'./main.scss';

const Main =()=>{
    return (<div id="coding">
        <Header />
        <Coding/>
        <div className ="page">
            <Standard />
        </div>
    </div>);
}

export default Main;