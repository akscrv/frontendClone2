import React, { useEffect, useState } from 'react'
import "./Fifth.css"
function Fifth() {
  const [isTextVisible, setTextVisible] = useState(false);
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
    const leftText = document.querySelector(".fifth-first-text");
    const windowHeight = window.innerHeight;
    const fadeInThreshold = leftText.offsetTop - windowHeight / 2;
    setTextVisible(scrollPosition > fadeInThreshold);
  }, [scrollPosition]);
  return (
    <div className="container_5">
    <div className="inner_colour_5">
      <div className="x5_sub_contianer_div">
        <div className="x_5_th_div_1">
          <div>
            <img
              className="imag_5container_left"
              src="https://images.ctfassets.net/w65k7w0nsb8q/3H4FKv6A1O5AKQ3HjZ2SaL/763eec76eb8dd938511573ab6accc691/DSC_0629__1_.jpg?w=3840&q=75"
            />

            <h2 className='fifth-h2'>Lava Restaurants
            <span
                    className={`fourth-left-arrow`}
                  >
                    ➜
                  </span>
            </h2>
            <p className='fifth-text'>Culinary classics. Volcanic architecture.</p>
          </div>
        </div>
        <div className="x_5_th_div_2">
        <div
          className={`fifth-first-text ${isTextVisible ? "fade-in" : ""}`}
          style={{ opacity: isTextVisible ? 1 : .5, transform: `translateY(${isTextVisible ? "-20px" : "30px"})`, }}
        >
        <p className="fifth-right-text">A culinary journey</p>
        <p className="fifth-right-p">Fine dining at Blue Lagoon Iceland takes you into a gourmet landscape of tradition, innovation, purity, and freshness.</p>
        </div>
          <div className="two_img_5_contiainer">
            <div className='fifth-small-div'>
              <img
                className="two_img_5_contiainer_img1"
                src="https://images.ctfassets.net/w65k7w0nsb8q/5htqshUyHwGi3hbAySCS4Y/83a422ff7660b7cf02d5180d8262be6f/moss.jpg?w=3840&q=75"
              />
              <h2 className='fifth-h2'>Moss Restaurant
              <span
                    className={`fourth-left-arrow`}
                  >
                    ➜
                  </span>
              </h2>

              <p className='fifth-text'>
              Unforgettable cuisine. 
              <br/>
              A Michelin starred experience.
              </p>
            </div>
            <div className='fifth-small-div fifth-small-div-2'>
              <img
                className="two_img_5_contiainer_img2"
                src="https://images.ctfassets.net/w65k7w0nsb8q/4fQosqROWG4ijiilFDX8PQ/eabe8b8a71bf086141b3aafcb4890b8b/spaRestaurant.jpg?w=3840&q=75"
              />
              <h2 className='fifth-h2'>Spa Restaurant
              <span
                    className={`fourth-left-arrow`}
                  >
                    ➜
                  </span>
              </h2>

              <p className='fifth-text'>
              Gourmet delicacies at the Retreat Spa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Fifth