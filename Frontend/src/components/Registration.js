import React,{useState} from 'react'
import './Registration_style.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';
const Registration = () => {
  const location=useLocation();
    const [userdata,setuserdata]=useState({
        username:"",
        email:"",
        phone:"",
        age:"",
        password:"",
        confirmPassword:""
    });
   const handleSubmit2=(e)=>{
    try{
      e.preventDefault();
      // if (userdata.password !== userdata.confirmPassword) {
      //   alert("Password and Confirm Password do not match");
      //   return;
      // }
    
    axios.post('http://localhost:3002/registration',userdata)
    .then(res=>{
        console.log(res.userdata);
        setuserdata({
           username: '',
           email: '',
           contact: '',
           age:'',
           password:'',
           confirmPassword:""
          
        })
        alert("Successfully register!!");
        window.location='/';
  })
}
      catch(err){
        console.log("error occured");
      }
    
   } 
  
  return (
    <div>
 <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit2}>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" placeholder='Name' class="form-control form-control-lg" value={userdata.username} onChange={e => setuserdata({ ...userdata, username: e.target.value })} />
                  <label class="form-label" for="form3Example1cg"></label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" placeholder='Email' class="form-control form-control-lg" value={userdata.email} onChange={e => setuserdata({ ...userdata, email: e.target.value })}/>
                  <label class="form-label" for="form3Example3cg"></label>
                </div>
                <div class="form-outline mb-4">
                  <input type="number" id="form3Example3cg" placeholder='Contact' class="form-control form-control-lg" value={userdata.phone} onChange={e => setuserdata({ ...userdata, phone: e.target.value })}/>
                  <label class="form-label" for="form3Example3cg"></label>
                </div>
                <div class="form-outline mb-4">
                  <input type="Number" id="form3Example3cg" placeholder='Age' class="form-control form-control-lg" value={userdata.age} onChange={e => setuserdata({ ...userdata, age: e.target.value })}/>
                  <label class="form-label" for="form3Example3cg"></label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg"placeholder='Password' class="form-control form-control-lg" value={userdata.password} onChange={e => setuserdata({ ...userdata, password: e.target.value })} />
                  <label class="form-label" for="form3Example4cg"></label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" placeholder='Confirm password' class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg"></label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox"  id="form2Example3cg"  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0" id='login'>Have already an account? <a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
               
    </div>
  )
}

export default Registration