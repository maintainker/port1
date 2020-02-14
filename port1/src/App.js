import React, { useState, useCallback } from 'react';
 
import PortMain from './coding/portmain';
import Main from './main/main';
import Bgc from './background/main';
import About from "./about/about"
import Contact from "./contact/contact"




function App() {
  const [disp,set_disp]=useState("main");
  const click_menu = useCallback( (value) =>{
    set_disp(value);
    console.log(disp);
  },[disp]);

  if(disp==="main"){
    return (
      <div className="App">
          <Bgc />
          <Main click_menu={click_menu} />
      </div>
    ); 
  }else if(disp==="port"){
    return (
      <div className="App">
          <Bgc />
          <PortMain click_menu={click_menu} />
      </div>
    );
  }else if(disp ==="about"){
    return (
    <div className="App">
        <Bgc />
        <About click_menu={click_menu} />
    </div>
  );}else if(disp ==="contact"){
    return (
    <div className="App">
        <Bgc />
        <Contact click_menu={click_menu} />
    </div>
  );}
}

export default App;
