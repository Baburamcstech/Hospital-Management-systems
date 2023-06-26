import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Appointment_historyStyle.css';
const History_of_user = () => {
  const location=useLocation();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/appointment/id")
      .then(res => {
        if (res.data.status==="success") {
          console.log(res.data.Result)
          setDatas(res.data.Result);
        } else {
          alert("Error!!");
          window.location='/login';
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
            {datas.map(data => <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.problem}</td>
            <td>{data.doctor}</td>
            <td>{data.time_slot}</td>
          </tr>)}
            
        </tbody>
      </table>
    </div>
  );
};

export default History_of_user;
