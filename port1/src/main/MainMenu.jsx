import React, { useCallback } from "react";
//const numsList = nums.map((nums,index) => <div key = {nums} className = {nums<number? 
//'box active '+nums:'box '+nums} onClick = {()=>clicked(nums)}><span>{nums}</span></div>);

const MainMenu = ({click_menu})=>{
    const menu_list =["about","portfolio","contact"];
    const onclick = useCallback((v) =>{
        if(v === "about"){click_menu("about");}
        else if(v === "portfolio"){click_menu("port");}
        else if(v === "contact"){click_menu("contact");}
        else if(v === "main"){click_menu("main");}
        
    },[click_menu]);

    const Menu = ()=>{

        const menu =  menu_list.map((v)=>{
            return(<li onClick={()=>onclick(v)}>{v}</li>);
        });
        return menu;
    }

    return (<ul><Menu /></ul>);
}

export default MainMenu;