import './NavbarPStyle.css';
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
        <li> <Link to='/user/account'>Account</Link></li>
        <li> <Link to='/Book_Appointment'>Book Appointment</Link></li>
        <li> <Link to='history'>Appointment History</Link></li>
        <li> <Link to='/Contact'>Medical History</Link></li>

        {/* {location.pathname === '/' && (
      <button className='loginb'><Link to='/Login'>Login</Link></button>
      )} */}
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