import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../pages/Home/Home";
import Dishes from '../pages/Dishes/Dishes';
import Booking from '../pages/Booking/Booking';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';


function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes