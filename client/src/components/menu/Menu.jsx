import React from 'react';
import {menuLink} from '../../data/menuLink';
import MenuLink from '../menuLink/MenuLink';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import './menu.scss';

function Menu(props) {
  return (
  <div className={props.openMenu ? "menu active" : "menu"}>
    <div className={props.openMenu ? "menuBtn active" : "menuBtn"} onClick={()=>{props.setOpenMenu(!props.openMenu)}}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul onClick={()=>{props.setOpenMenu(!props.openMenu)}}>
        <li>
          {menuLink.map((link)=>(
            <MenuLink
                key={link.id}
                id={link.id}
                title={link.link}/>
        ))}
        </li>
        <li className="social">
            <span><a href="https://www.facebook.com/MomentsTR"><FaFacebook /></a> </span>
            <span><a href="https://www.instagram.com/momentswedd/"><FaInstagram /></a> </span>
        </li>
    </ul>
  </div>
  );
}

export default Menu;
