import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import UserProfile from './UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user/:username' element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
