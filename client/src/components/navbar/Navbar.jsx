import React from 'react';
import './navbar.scss';
import NavbarLink from '../navbarLink/NavbarLink';
import {menuLink} from '../../data/menuLink';

function Navbar(props) {

    return (
      <div className="navbar scroll" id="navbar">
        <div className="container">
            <div className='left-container'>
                <a href="/" className='logo'>
                    <img src="https://www.moments.my/data/uploads/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="right-container">
                <ul>
                    {menuLink.map((link)=>(
                        <NavbarLink
                        key={link.id}
                        id={link.id} 
                        title={link.link} />
                    ))}
                </ul>
            </div>
            <div className={props.openMenu ? "menu-btn active" : "menu-btn"} onClick={()=>{props.setOpenMenu(!props.openMenu)}}>
                <span style={{backgroundColor: "#dfac9e"}}></span>
                <span style={{backgroundColor: "#dfac9e"}}></span>
                <span style={{backgroundColor: "#dfac9e"}}></span>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
