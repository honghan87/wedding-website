import React, {useEffect} from 'react';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import './hero.scss';
import {BsChevronCompactDown} from 'react-icons/bs';

function Hero() {

  useEffect(()=>{
    Aos.init({})
  }
  , [])

  return (
  <div className="hero" id='hero'>
   <div className="textContainer">
    <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
      every little thing matters
    </h1>
    <p data-aos='fade-up' data-aos-duration="1500" data-aos-delay="1000">planning. styling. conceptualizing</p>
   </div>
   <div  className="chevron"> 
    <BsChevronCompactDown />
  </div>
  </div>);
}

export default Hero;
