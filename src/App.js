import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs';
import Events from './Events';
import Corporate from './Corporate';
import Baptismal from './Baptismal';
import Calendar from './Calenda';
import Wedding from './Wedding';










const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/event" element={<Events/>}/>
      
      <Route path="/baptismal" element={<Baptismal/>}/>
      <Route path="/bookus" element={<Calendar/>}/>
      <Route path="/corporate" element={<Corporate/>}/>
      <Route path="/wedding" element={<Wedding/>}/>
      
      
    </Routes>
  );
};

export default App;
