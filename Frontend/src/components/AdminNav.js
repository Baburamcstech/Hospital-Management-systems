import './NavbarStyle.css';
import React, {useState} from 'react';
import {FaTimes,FaBars} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Login from './Login';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const [color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.scroll>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color? "header header-bg":
    "header"}>
    <div>
    <ul className={click? 'nav-menu active':'nav-menu'}>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/Doctors'>Doctors</Link></li>
        <li> <Link to='/Patient_statistics'>Patients</Link></li>
        <li> <Link to='/doctor/Appointment_history'>appointment_History</Link></li>
        <li> <Link to='/About'>About</Link></li>
        {location.pathname === '/' && (
      <button className='loginb'><Link to='/Login'>Login</Link></button>
      )}
    </ul>
   
    <div className='hamburger' onClick={handleClick}>
            {
                click?(
            
            <FaTimes size={20} style={{ color:"#fff"}}/>
            ) :(
            <FaBars size={20} style={{ color:"#fff"}}/>
           )}
        </div>
    </div>
    </div>
  )
}

export default Navbar;