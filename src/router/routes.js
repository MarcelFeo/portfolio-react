import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Thanks from '../components/Thanks';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thankyou" element={<Thanks />} />
    </Routes>
  )
}

export default Router;
