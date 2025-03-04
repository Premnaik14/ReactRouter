import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  );
};

export default App;
