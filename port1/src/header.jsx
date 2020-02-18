import React from 'react';
import './header.scss';
import { useState } from 'react';
import styled from 'styled-components';

const Header =({click_menu})=>{
    const [active,set_active]=useState("wrap");
    const [disp,set_disp]=useState('none');
    const menu_list = ["about","portfolio","contact"]
    const onclick =()=>{
        if(active === "wrap"){set_active("wrap active");set_disp('block')}
        else if(active === "wrap active"){set_active("wrap");set_disp('none')}
    }
    const Menu = styled.div`
        display: ${disp};
        width : 100%; 
        height : calc(100% - 150px);
        margin-top: 151px;
        position: fixed;
        top:0px;
        left:0;
        background: #000;
    `;
    const dispchage = (v)=>{
        let m;
        if(v==='portfolio'){m='port';}
        else{m=v;}
        click_menu(m);
    }

    const Menuli =()=>{ 
    //    let m;
        const me =menu_list.map((v)=><li onClick={()=>dispchage(v)}>{v}</li>);
        return me;
    }


    return (
    <div id='header'>
        <p className='italic' onClick={()=>click_menu("main")}>Sul’s Portfolio</p>
        <div className={active} onClick={()=>onclick()}>
            <div className='fall_down'  />
        </div>
        <Menu>
            <ul className='hidden_menu'>
                <Menuli/>
            </ul>
        </Menu>
    </div>);
}

export default Header;