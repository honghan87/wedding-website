import React, { useState, useEffect } from 'react';
import './testimonials.scss';
import {testimonials} from '../../data/menuLink';
import Testinomial from '../testimonial/Testinomial';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

function Testimonials() {

  useEffect(()=>{
    Aos.init({})
  }
  , [])

  const [current, setIndex] = useState(0);
  const length = testimonials.length;

  function clickPrev(){
    setIndex(current === 0 ? length-1 : current - 1)
  }

  function clickNext(){
    setIndex(current === length -1 ? 0 : current + 1)
  }

  return (
  <div className='testimonials' >
      <div className="container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        <div className="left">
          <BsChevronCompactLeft className='icons' onClick={clickPrev}/>
        </div>
        <div className="center">
          {testimonials.map((testimonial, index)=> {
            return (
              index === current && <Testinomial key={testimonial.id} review={testimonial.review} client={testimonial.client}/>
            )
          })}
        </div>
        <div className="right">
          <BsChevronCompactRight className='icons' onClick={clickNext}/>
        </div>
      </div>    
  </div>);
}

export default Testimonials;

