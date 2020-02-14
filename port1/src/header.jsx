import React from 'react';
import './header.scss';

const Header =({click_menu})=>{
    return (<div id='header' onClick={()=>click_menu("main")}>
        <p className='italic'>Sul’s Portfolio</p>
        <div className='fall_down' />
    </div>);
}

export default Header;