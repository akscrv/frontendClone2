import React, { useEffect, useState } from "react";
import "./Tenth.css";

function Tenth() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTextVisible, setTextVisible] = useState(false);
  

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const leftText = document.querySelector(".tenth-text");
    const windowHeight = window.innerHeight;

    const fadeInThreshold = leftText.offsetTop - windowHeight / 2;
    setTextVisible(scrollPosition > fadeInThreshold);
  }, [scrollPosition]);
  return (
    <div className="container_10">
      <div className="inner_colour_10">
        <div className="con_10_div_1">
        <div
          className={`tenth-text ${isTextVisible ? "fade-in" : ""}`}
          style={{ opacity: isTextVisible ? 1 : .5, transform: `translateY(${isTextVisible ? "-20px" : "30px"})`, }}
        >
          <h1 className="con_1_div_1_h1_xx">Blue Lagoon opening hours</h1>
          </div>
          <div className='white_div_10'>
            <div className="div_10_flex">
              <p className="first_p_10_blue">Opening hours</p>
              <p className="first_p_10_x">The closing time of the lagoon</p>
            </div>
            <div className="div_10_flex">
              <p className="first_p_10">1 June-20 August, from 07:00-24:00</p>
              <p className="first_p_10_x">changes from season to season.</p>
            </div>
            <div className="div_10_flex">
              <p className="first_p_10">21 August-January, from 08:00-22:00</p>
              <p className="first_p_10_x">
              But guests must always exit the water <br></br>30 minutes before closure.
              </p>
            </div>
          </div>
          <div className='con_10_sigh_dic'>
          <p className="con_1_div_1_p_bluex">
          View all opening hours →
          </p>

          <p className="con_1_div_1_p_bluex">
          How to get there →
          </p>

          </div>
        </div>
        <div className="con_10_div_2">
          <img
            className="con_10_div_2_img_1"
            src="https://images.ctfassets.net/w65k7w0nsb8q/2qjnNNMzd8OphtnqBW7RNK/5383307404bb0e99d65ed787f103571b/DJI_0348__4_.jpg?w=3840&q=75"
          />
         
        </div>
      </div>
    </div>
  );
}

export default Tenth;
