import "./App.css";
import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Home_admin from "./routes/Admin_home";
import Doctors from "./routes/Doctors";
import Login from "./components/Login";
import Registration from "./components/Registration.js";
import Patient from "./routes/Patient";
import Contact from "./routes/Contact";
 import { Routes, Route } from 'react-router-dom';
import ContactForm from "./components/ContactForm";
import Book_Appointment from "./components/Book_Appointment";
import Account from "./components/Account";
import Appointment_history from "./components/Appointment_history";
import UserHistory from "./components/History_of_user";
import TestInput from "./components/TestInput";
import axios from "axios";

function App() {

  // const isAuthenticated = true; // Replace with your authentication logic
  // const Navigate = useNavigate();
  // const location = useLocation();
  // const PrivateRoute = ({ element }) => {
  //   if (isAuthenticated) {
  //     return element;
  //   } else {
     
  //     return <Navigate to="/login"/>;
  //     // Navigate to={`/login?destination=${encodeURIComponent(location.path)}`} 
  //   }
  // };


  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Home_admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Book_Appointment" element={<Book_Appointment />} />
          <Route path="/user/account" element={<Account />} />
          <Route path="/doctor/Appointment_history" element={<Appointment_history />} />
          <Route path="/Doctors" element= { <Doctors />} />
          <Route path="Patient/history" element={<UserHistory />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/testinput" element={<TestInput />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
