// eslint-disable-next-line
import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Projects from './components/projects/Projects';
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import ScrollToTop from '../src/components/scrollToTop/ScrollToTop';

function App() {
  
  // opening/closing of hamburger menu
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <ScrollToTop >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
