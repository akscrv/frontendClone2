import React from "react";
import "./Seventh.css";

const Seventh = () => {
  return (
    <div className="seventh-container">
      <div className="seventh-section-1">
        <h2>Blue Lagoon Stories</h2>
        <p>
          From practical facts to inspiring insights, our stories reveal a world
          of wonder.
        </p>
        <button className="explore-link">Explore Stories</button>
      </div>
      <div className="three-divs">
        <div className="seventh-section">
          <div className="seventh-image-container">
          <img
            src="//images.ctfassets.net/w65k7w0nsb8q/1VEzIcXy42Gp5eFe4uqJor/8c292500a2a1b4092c47e1bc2889eca9/DSC08079.jpg?fit=fill&fm=webp&h=600&q=80&w=500"
            alt="Blue Lagoon"
            className="seventh-image"
          />
          </div>
          <p className="blue-lagoon-text">Blue Lagoon</p>
          <h3 className="seventh-text-2">
            Best Place To Take Photos At Blue Lagoon Iceland
          </h3>
        </div>
        <div className="seventh-section">
        <div className="seventh-image-container">
          <img
            src="//images.ctfassets.net/w65k7w0nsb8q/41a0fGs9UeY3x9mxxQpAWs/c9c504698703ecd2b2ff0259d3aa0ccb/DSC07032__1_.jpg?fit=fill&fm=webp&h=600&q=80&w=500"
            alt="BLUE LAGOON"
            className="seventh-image"
          />
          </div>
          <p className="blue-lagoon-text">Blue Lagoon</p>
          <h3 className="seventh-text-2">Why is the Blue Lagoon blue?</h3>
        </div>
        <div className="seventh-section">
        <div className="seventh-image-container">
          <img
            src="//images.ctfassets.net/w65k7w0nsb8q/4zeTjbw4PjKM2kz0Bsrh4P/467cbe8a32c53de6fd84d61dc9460fe6/Hero.jpg?fit=fill&fm=webp&h=600&q=80&w=500"
            alt="BLUE LAGOON"
            className="seventh-image"
          />
          </div>
          <p className="blue-lagoon-text">Blue Lagoon</p>
          <h3 className="seventh-text-2">
            Things to do near Blue Lagoon Iceland
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
