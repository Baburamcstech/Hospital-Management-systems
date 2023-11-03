import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment_historyStyle.css';
const Appointment_history = () => {
  useEffect(() => {
    const isAuthenticated = document.cookie.split('; ').some((cookie) => {
      return cookie.startsWith('mycooki');
    });
    if (!isAuthenticated) {
      window.location="./login"
    }
  });

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/appointment")
      .then(res => {
        if (res.data.status ==="success") {
          setDatas(res.data.Result);
        } else {
          alert("Error!!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error occurred while fetching data");
      });
  }, []);

  return (
    <div>
      <table className='tab'>
        
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Problem</th>
                <th>Doctor</th>
                <th>Time_slot</th>

                </tr>
            </thead>
            <tbody>
          {datas.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.problem}</td>
              <td>{patient.doctor}</td>
              <td>{patient.time_slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointment_history;
