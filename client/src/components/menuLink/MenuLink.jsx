import React from 'react';
import './menuLink.scss';
import {Link} from 'react-router-dom';

function MenuLink(props) {
  return (
  <Link to={`/${props.title}`} style={{textDecoration:'none'}} className="menuLink">
      <h4 className='menuTitle'>{props.id}</h4>
  </Link>
    );
}

export default MenuLink;
