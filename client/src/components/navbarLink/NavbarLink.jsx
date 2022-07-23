import React, { useState } from 'react';
import './navbarLink.scss';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function NavbarLink(props) {

  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <Link smooth to={`/${props.title}`} style={{textDecoration:'none'}}>
      <li className="navbarLink"
          onMouseEnter={()=>setMouseEnter(true)}
          onMouseLeave={()=>setMouseEnter(false)}>
          <div className={mouseEnter ? "navbarText borderBottom" : "navbarText"}>{props.id}</div>
      </li>
    </Link>
    );
}

export default NavbarLink;
