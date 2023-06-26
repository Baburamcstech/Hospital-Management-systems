import React from 'react';
import './HomeStyle.css';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <div className='homep'>
      <Navbar/> 
      </div>
      <HeroImg/>
      <Footer/> 
    </div>
  );
}
export default Home;


