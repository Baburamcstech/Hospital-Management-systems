import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appoint_stats_st.css'
const Appoint_stats = () => {
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
    axios.get("http://localhost:3002/statisticstoday")
      .then(res => {
        if (res.data.status ==="success") {
          setDatas(res.data.Result);
        } else {
          alert("Your are not permitted to access this data!!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error occurred while fetching data");
      });
  }, []);
    const [datas2, setDatas2] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/statistics")
      .then(res => {
        if (res.data.status ==="success") {
          setDatas2(res.data.Result);
        } else {
          alert("Your are not permitted to access this data!!");
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
            {/* <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Problem</th>
            <th>Doctor</th>*/}
            <th>Time_slot</th> 
            <th>Patient_num</th>
            </tr>
        </thead>
        <tbody>
          {/* Today's appointments */}
          {datas.map((patient, index) => (
  <tr key={index} className="green-row">
    <td>{patient.time_slot}</td>
    <td>{patient.patient_num}</td>
  </tr>
))}

       {datas2.map((patient, index) => (
            <tr key={index} className="green2-row">
              <td>{patient.time_slot}</td> 
              <td>{patient.patient_num}</td>
            </tr>
          ))}
           </tbody>
      </table>
    </div>
  )
}

export default Appoint_stats