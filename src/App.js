import React from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Others from './components/Others';


function App(){
  return(
    <div>
<BrowserRouter> <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/others" element={<Others/>}/>

  </Routes></BrowserRouter>
 

    </div>
  )

}

export default App;