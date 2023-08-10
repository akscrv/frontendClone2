import React, { useEffect, useState } from "react";
import "./Fourth.css";

const Fourth = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [isArrowVisible1, setArrowVisible1] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
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
    const leftText = document.querySelector(".fourth-first-text");
    const windowHeight = window.innerHeight;

    const fadeInThreshold = leftText.offsetTop - windowHeight / 2;
    setTextVisible(scrollPosition > fadeInThreshold);
  }, [scrollPosition]);
  return (
    <div className="fourth-container">
       <div className="fourth-background" />
        
      <div className="fourth-left-section">
        <img
          src="https://images.ctfassets.net/w65k7w0nsb8q/45KeFhPWskRbdCRXopJXu3/059fe4d68a4b6837b751174e2837be19/BL_Retreat_6170_01__6_.jpg?w=3840&q=75"
          alt="The Retreat Hotel"
          className="fourth-image"
        />
        <div className="fourth-text-container">
          <h4 className="fourth-hotel-name">The Retreat Hotel
          <span
                    className={`fourth-left-arrow`}
                  >
                    ➜
                  </span>
          </h4>
          <p className="fourth-price">From USD 1,634</p>
          <p className="fourth-hotel-description">
            Sophistication. Serenity. Luxury.
          </p>
        </div>
      </div>
      <div className="fourth-right-section">
      <div
          className={`fourth-first-text ${isTextVisible ? "fade-in" : ""}`}
          style={{ opacity: isTextVisible ? 1 : .5, transform: `translateY(${isTextVisible ? "-20px" : "30px"})`, }}
        >
        <p className="fourth-right-text">Accommodations</p>
        <p className="fourth-right-p">Unwind the clock of modern life and unlock the door to a wonder of the world.</p>
        </div>
        <img
          src="https://images.ctfassets.net/w65k7w0nsb8q/4Y57j3fWmI0MA6ASo0scEe/d64e5db0247f685425a28de6cbef1449/Lava_Deluxe_King_1.jpg?w=1920&q=75"
          alt="Silica Hotel"
          className="fourth-right-image"
        />
        <div className="fourth-right-text-container">
          <h4 className="fourth-hotel-name">Silica Hotel
          <span
                    className={`fourth-left-arrow`}
                  >
                    ➜
                  </span>
          </h4>
          <p className="fourth-price">From USD 667</p>
          <p className="fourth-hotel-description">
            Comfort. Warmth. Wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
