import React from 'react'
import axios from "axios";
import './Account_style.css';
import {Link} from "react-router-dom"
import Footer from '../components/Footer';
//const [accountData,setaccountData]=useState([]);
const Account = () => {
  return (
    <div className='account'>
       <div>
     <button><Link to='/profile'> Profile</Link> </button>
     <button><Link to='/profile'> History</Link> </button>
     </div>
     <div>
     <button><Link to='/profile'>Medical</Link> </button>
     <button><Link to='/logout'> Logout</Link> </button>
     </div>
     <div style={{height:"100%"}}><Footer/></div>
    </div>
  )
}

export default Account