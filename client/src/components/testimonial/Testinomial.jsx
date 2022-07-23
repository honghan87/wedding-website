import React from 'react';
import './testimonial.scss';

function Testinomial(props) {
  return (
    <div className="testimonial">
        <div className='reviewContainer'>
            <p><span>{props.review[0]}</span>{props.review.slice(1, props.review.length+1)}</p>
            <h4>{props.client}</h4>
        </div>
        
    </div>
  )
}

export default Testinomial;