import React,{useState,useEffect} from 'react'
import './Book_A_Style.css';
import axios from "axios";
const Book_Appointment = () => {
  // const {values,setvalues}=useState([
  //   name:"",
  //   phone:"",
  //   email:"",
  //   address:"",
  //   doctor:"",
  //   problem:"",
  //   time_slot:""
  // ]);

  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAdd]=useState('');
  const [doctor,setselectdoctor]=useState('');
  const [problem,setProblem]=useState('');
  const [time_slot,setTime]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
       axios.post("http://localhost:3002/appointment",{name,phone,email,address,doctor,problem,time_slot})
       .then((res)=>{
        return res.body;
       })
       setName("");
       setEmail("")
       setPhone("")
       setAdd("")
       setselectdoctor("")
       setProblem("")
       setName("")
      }
       catch(err){
         console.err(err);
       }

  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='page'>
                  <div className='page1'>
                    <label>Full name: </label>
                    <input type='text' name='username' required onChange={e=>setName(e.target.value)}  value={name}></input>
                  </div>
                  <div className='page1'>
                    <label>Phone Number: </label>
                    <input type='phone' name='phone' value={phone} required onChange={e=>setPhone(e.target.value)}></input>
                  </div>
                  <div className='page1'>
                    <label>Email ID: </label>
                    <input type='text' name='email' value={email} required onChange={e=>setEmail(e.target.value)}></input>
                  </div>
                  <div className='page1'>
                    <label>Address: </label>
                    <input type='text' name='address' value={address} required onChange={e=>setAdd(e.target.value)}></input>
                  </div>
                  <div className='page1'>
                    <label>Select Doctor: </label>
                    <select  value={doctor} onChange={e=>setselectdoctor(e.target.value)}>
                      <option disabled value={"Select Doctor"}  > Select Doctor</option>
                      <option value={"Dr. Shimon Shiromani"}>
                        Dr. Shimon Shiromani 
                      </option>
                      <option value={"Dr. Sonu paswan"}>
                        Dr. Sonu paswan
                      </option>
                      <option value={"Dr. Harsh Pathak"}>
                        Dr. Harsh Pathak
                      </option>
                    </select>
                  </div>
                  <div className='page1'>
                    <label>Problem </label>
                    <input type='text' name='problem' value={problem} required onChange={e=>setProblem(e.target.value)}></input>
                  </div>
                  <div className='page1'>
                    <label>Time slot: </label>
                    <input type='text' name="time_slot" value={time_slot} required onChange={e=>setTime(e.target.value)}></input>
                  </div>
                  <div><button type="submit">Submit</button></div>
            </div>
        </form>
    </div>
  )
}

export default Book_Appointment