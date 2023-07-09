import React from 'react';
import Welcome from '../../pages/welcome/Welcome'
import Partner from "../../pages/Partner/Partner";
import Booking from "../../pages/Booking/Booking";
import Dishes from "../../pages/Dishes/Dishes";
import Ambience from "../../pages/Ambience/Ambience";
import Delivery from "../../pages/Delivery/Delivery";
import About from '../About/About';

function Home() {
  return (
    <>
    <Welcome/>
    <Partner/>
    <Booking/>
    <Dishes/>
    <Ambience/>
    <Delivery/>
    <About/>
    </>
    )
}

export default Home