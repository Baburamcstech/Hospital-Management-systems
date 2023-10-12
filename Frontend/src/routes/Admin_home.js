import React from 'react'
import './HomeStyle.css';
import Navbar from '../components/AdminNav';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
const Admin_home = () => {
  return (
    <div>
         
      <div className='homep'>
      <Navbar/> 
      </div>
      <HeroImg/>
      <Footer/> 
  
    </div>
  )
}

export default Admin_home