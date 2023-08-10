import React, { useEffect, useState } from 'react'
import './Ninth.css'

function Ninth() {
  const [scrollPosition, setScrollPosition] = useState(5000);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const parallaxFactor = 0.3;
  return (
    <div className="container_9">
    <div className="inner_colour_9">
      
      <div className="con_9_div_2">
        <img 
    
        style={{
          transform: `translateY(-${scrollPosition/100}px)`,
          transition: "transform 0.3s ease",
        }}
        className="con_9_div_2_img_1" src="https://images.ctfassets.net/w65k7w0nsb8q/7epUduTuS2YOvUTb4K8kWW/6ed5064d86c211154bf2863302de77b8/BL_Retreat_V4A8235.jpg?w=3840&q=75"/>
        <img 
        
        style={{
          transform: `translateY(${scrollPosition/100}px)`,
          transition: "transform 0.3s ease",
        }}
        className="con_9_div_2_img_2" src="https://images.ctfassets.net/w65k7w0nsb8q/123IohpxXsLBhwfx21ukOU/3fe90157105ae5ae88969b1ea08e5271/CRL_0986.jpeg?w=3840&q=75"/>

      </div>
      <div className="con_9_div_1">
        <h1 className="con_1_div_1_h1" >
        Gift Cards
        </h1>
        <p className="con_1_div_1_p">
        Enchanting day visits, luxurious accommodations, revitalizing spa journeys, or savory cuisine? Learn more about Blue Lagoon Gift Cards and give someone special an unforgettable experience.
        </p>

        <h3 className="button_9_div">
          See More.
        </h3>

      </div>
    </div>
  </div>
  )
}

export default Ninth