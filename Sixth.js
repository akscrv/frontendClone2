import React, { useEffect, useState } from 'react'
import "./Sixth.css"

function Sixth() {
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
  
  return (
    <div className="container_6">
    <div className="inner_colour_6">
      <div className="con_8_div_1_x">
        <h1 className="con_1_div_1_h1" >
        Discover our skincare
        </h1>
        <p className="con_1_div_1_p">
        Take your mind and body to the Blue Lagoon without leaving your home.
        </p>

        <h3 className="button_6_div">
          Show Locations
        </h3>

      </div>
      <div className="con_8_div_2">
      
        <img 
        style={{
              transform: `translateY(-${scrollPosition / 50}px)`,
              transition: "transform 0.1s ease",
            }} 
            className="con_6_div_2_img_1" src="https://images.ctfassets.net/w65k7w0nsb8q/3qw036KLRXbZGe6V8WaBDu/a7e3a402273718fd74962f83049e88b5/bluelagoon_skincare_1713_ok_IGOR.jpg?w=3840&q=75"/>
        <img 
          style={{
            transform: `translateY(${scrollPosition / 60}px)`,
            transition: "transform 0.3s ease",
          }} 
        className="con_6_div_2_img_2" src="https://images.ctfassets.net/w65k7w0nsb8q/7IyFkHz6p3dKhXTTTqFoWi/dfbbfe1c406b3b432cea8d88122e6b8f/BL_SPA_BRAND23_AM_0823-0825_33.jpg?w=3840&q=75"/>

      </div>
    </div>
  </div>
  )
}

export default Sixth