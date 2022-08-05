import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppMain from "./AppMain";
import LogIn from "./components/login/login"; 
import Signup from './components/signup/signup';
import Forgotpassword from './components/forgotpassword/forgotPassword';
import LandingPage from './components/landingpage/landingPage';
 
function App() {
  
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/dashboard/*" element={<AppMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
