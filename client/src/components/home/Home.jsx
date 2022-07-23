import React from 'react';
import Intro from "../intro/Intro";
import Hero from '../hero/Hero';
import Contact from '../contact/Contact';
import Testimonials from '../testimonials/Testimonials'

function Home() {

    return (
        <div className='home' id="home">
            <Hero />
            <Intro />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home;