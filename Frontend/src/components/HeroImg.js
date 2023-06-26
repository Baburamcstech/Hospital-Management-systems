import "./HeroStyle.css";
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const HeroImg = () => {
  const location = useLocation();
  const [bgImg, setBgImg] = useState('');
  const [bgTxt, setBgTxt] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBgImg(`url(/images/background.jpg)`)
        setBgTxt("Health is not simply the absence of sickness.")
        break;
      case "/Doctors":
        setBgImg(`url(/images/background_doctor.jpg)`)
        setBgTxt("Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend")
        break;
      case "/Patient":
        setBgImg(`url(/images/background_patient.jpg)`)
        setBgTxt("Take care of your body. It's the only place you have to live")
        break;
      case "/admin":
        setBgImg(`url(/images/background_admin.jpg)`)
        break;
      default:
        setBgImg(`url(/images/background.jpg)`)
        break;
    }
  }, [location])

  return (
    <div className="hero">
      <div className="mask" style={{ backgroundImage: bgImg }}>
        <p>{bgTxt}</p>
      </div>
      <div className="content">
        {/* Additional content */}
      </div>
    </div>
  );
};

export default HeroImg;
