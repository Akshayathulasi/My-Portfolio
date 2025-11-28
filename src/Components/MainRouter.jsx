import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skill from './Pages/Skill';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import MyNavbar from './MyNavbar';   // ✅ add navbar here

const MainRouter = () => {
  return (
    <div>
      {/* ✅ Navbar must be above Routes */}
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;