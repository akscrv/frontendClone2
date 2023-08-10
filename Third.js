import React, { useEffect, useState } from "react";
import "./Third.css";

const Third = () => {
  const [isArrowVisible1, setArrowVisible1] = useState(false);
  const [isArrowVisible2, setArrowVisible2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTextVisible, setTextVisible] = useState(false);
  const handleButtonHover1 = () => {
    setArrowVisible1(true);
  };

  const handleButtonHoverExit1 = () => {
    setArrowVisible1(false);
  };
  
  const handleButtonHover2 = () => {
    setArrowVisible2(true);
  };

  const handleButtonHoverExit2 = () => {
    setArrowVisible2(false);
  };

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
    const leftText = document.querySelector(".first-text");
    const windowHeight = window.innerHeight;

    const fadeInThreshold = leftText.offsetTop - windowHeight / 2;
    setTextVisible(scrollPosition > fadeInThreshold);
  }, [scrollPosition]);
  return (
    <>
      <div className="third-container">
        <div className="background" />
        <div
          className={`first-text ${isTextVisible ? "fade-in" : ""}`}
          style={{ opacity: isTextVisible ? 1 : .5, transform: `translateY(${isTextVisible ? "-20px" : "30px"})`, }}
        >
          <h2>Day Visit</h2>
          <p>
            Discover the waters of the Blue Lagoon. Journey through a spa of the
            volcanic earth.
          </p>
        </div>
        <div className="container">
          <div className="left">
            <div className="left-image">
              <img
                src="https://images.ctfassets.net/w65k7w0nsb8q/7vwrFiKDs9t44OtH4XV1sN/86cd1165057c52aeccb84a57cdeb6a66/BL_SPA_BRAND23_AM_0823-0825_11.jpg?w=1920&q=75"
                alt="Blue Lagoon Spa"
              />
            </div>
            <div className="left-text">
              <h2>The Blue Lagoon</h2>
              <br />
              <p>From USD 67</p>
              <br />
              <p>
                Discover the waters of the Blue Lagoon. Experience a wonder of
                the world. Harmonize with nature.
              </p>
              <br />
              <div className="buttons">
                <button className="third-left-button">Book Now</button>
                <button
                  className="third-right-button"
                  onMouseEnter={handleButtonHover1}
                  onMouseLeave={handleButtonHoverExit1}
                >
                  Explore
                  <span
                    className={`third-arrow ${
                      isArrowVisible1 ? "move-right" : ""
                    }`}
                  >
                    ➜
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="right"
            style={{
              transform: `translateY(-${scrollPosition / 10}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/w65k7w0nsb8q/3ROVqJ91uZveB0f9RuDoVB/fe65517653fe4bd04202393e88ee14ac/BL_Retreat_Spa_8097.jpg?w=1920&q=75"
                alt="The Retreat Spa"
              />
            </div>
            <div className="right-text">
              <br />
              <h2>The Retreat Spa</h2>
              <br />
              <p style={{ fontWeight: "100", fontSize: "1rem" }}>
                From USD 589 per changing room
              </p>
              <p>
                A luxurious journey into the volcanic earth. 5-hour exclusive
                entry to the Retreat Spa and the Blue Lagoon.
              </p>
              <br />
              <div className="buttons">
                <button className="third-left-button">Book Now</button>
                <button
                  className="third-right-button"
                  onMouseEnter={handleButtonHover2}
                  onMouseLeave={handleButtonHoverExit2}
                >
                  Explore
                  <span
                    className={`third-arrow ${
                      isArrowVisible2 ? "move-right" : ""
                    }`}
                  >
                    ➜
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
