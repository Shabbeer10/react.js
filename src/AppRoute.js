import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
