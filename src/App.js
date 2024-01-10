import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
    
      
    </Routes>
    
  </BrowserRouter>
    );
}

export default App;
