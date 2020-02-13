import React from "react";
//const numsList = nums.map((nums,index) => <div key = {nums} className = {nums<number? 
//'box active '+nums:'box '+nums} onClick = {()=>clicked(nums)}><span>{nums}</span></div>);

const MainMenu = (disp)=>{
    const me_list =["about","portfolio","contact"];

    const Menu = ()=>{
        const me =  me_list.map((v)=>{
            return(<li onClick={disp}>{v}</li>);
        });
        return me;
    }

    return (<ul><Menu /></ul>);
}

export default MainMenu;