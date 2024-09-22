import React from "react";
import "../Slider/style.css";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";

const Slider = () => {
  return (
    <div class="slider overflow-hidden">
      <div class="slide-track">
        <div class="slide">
          <img src={logo1} alt="img" />
        </div>
        <div class="slide">
          <img src={logo2} alt="img" />
        </div>
        <div class="slide">
          <img src={logo3} alt="img" />
        </div>
        <div class="slide">
          <img src={logo4} alt="img" />
        </div>
        <div class="slide">
          <img src={logo5} alt="img" />
        </div>
        <div class="slide">
          <img src={logo1} alt="img" />
        </div>
        <div class="slide">
          <img src={logo2} alt="img" />
        </div>
        <div class="slide">
          <img src={logo3} alt="img" />
        </div>
        <div class="slide">
          <img src={logo4} alt="img" />
        </div>
        <div class="slide">
          <img src={logo5} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
