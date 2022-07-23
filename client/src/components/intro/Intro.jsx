import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import {BsArrowRightShort} from 'react-icons/bs';
import './intro.scss';
import {introSlide} from '../../data/menuLink';

function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slideshow switch duration
    const delay = 5000;

    useEffect(()=>{
    Aos.init({})
  }
  , [])

  useEffect(()=>{
      setTimeout(
        ()=> setCurrentIndex(()=> 
            currentIndex === introSlide.length -1 ? 0 : currentIndex + 1
        ), delay);

        return () => {};
  }, [currentIndex]);

  return (
  <div className="intro" id="intro" >
    <div className="mainContainer">
        <div className='slideshow'>
            <div className="slideshowSlider">
                {introSlide.map((slide, index)=>
                <div className={index === currentIndex ? "carouselItem active" : "carouselItem"} style={{backgroundImage:`url(${slide.link})`}} key={index}>
                     <div className='introImg'>
                     </div>
                </div>
            )}
            </div>
        </div>
            <div className="textContainer">
                <div className="introLetter" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2000">O</div>
                <div className="introText">
                    <p className="bgTitle" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        You enjoy your <span>big moments,</span></p>
                    <p className="smTitle" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                        leave the hard work to us...</p>
                </div>
                <div className='contactContainer' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
                    <div className="card">
                        <a href="/projects">
                            <h3>View our projects <span><BsArrowRightShort /></span></h3>
                            <p>Browse through some of our favourite love stories and get a taste of our flavour of wedding cinema</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/#contact">
                            <h3>Have a date in mind? <span><BsArrowRightShort /></span></h3>
                            <p>It all starts with an honest conversation, we'd love to hear your wedding
                            plans and chat about capturing those once in a lifetime moments</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Intro;
