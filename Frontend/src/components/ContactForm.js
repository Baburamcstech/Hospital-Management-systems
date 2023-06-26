import React from 'react'
import './ContactFStyle.css';
const ContactForm = () => {
  return (
    <div>
        <section className="vh-100" style={{backgroundColor: "#2779e2"}}>
  <div className="container h-100 hei">
    <div className="row d-flex justify-content-center align-items-center h-100 hei">
      <div className="col-xl-9">

        <h2 className="text-white mb-4">Contact us</h2>

        <div className="card" style={{borderRadius: "15px"}}>
          <div className="card-body">

            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Full name</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input type="text" className="form-control form-control-lg" />

              </div>
            </div>

            <hr className="mx-n3"/>
                

            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Email address</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>
         
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Phone Number</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input type="email" className="form-control form-control-lg" placeholder="Phone Number" />

              </div>
            </div>
         
            <hr className="mx-n3"/>

            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Message name</h6>

              </div>
              <div className="col-md-9 pe-5">

                <textarea className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>

              </div>
            </div>
            
            <hr className="mx-n3"/>
            
            <hr className="mx-n3"/>

            <div className="px-5 py-4">
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
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

export default ContactForm;