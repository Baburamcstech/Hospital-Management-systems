import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbard from '../components/Navbard';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
const Doctors = () => {
  return (
    <div>
      <Navbard/> 
      <HeroImg/>
      <Footer/> 
    </div>
  )
}

export default Doctors