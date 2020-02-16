import React from 'react';
import './header.scss';

const Header =({click_menu})=>{
    return (<div id='header'>
        <p className='italic' onClick={()=>click_menu("main")}>Sul’s Portfolio</p>
        <div className='fall_down' />
    </div>);
}

export default Header;