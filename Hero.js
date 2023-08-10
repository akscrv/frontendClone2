import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
    const vapourElements = Array.from({ length: 30 }).map(() => ({
        "--i": Math.floor(Math.random() * 40) + 1,
      }));
      // const generateLinearNumbers = () => {
      //   return Array.from({ length: 30 }).map((_, index) => ({
      //     "--i": index + 1,
      //   }));
      // };

  return (
    <div className="hero-container">
    <div className="vapour">
      {vapourElements.map((vapourElement, index) => (
        <span key={index} style={vapourElement}></span>
      ))}
    </div>
    {/* <div className="vapour2">
        {vapourElements.map((vapourElement, index) => (
          <span key={index} style={vapourElement}></span>
        ))}
      </div> */}
    <img
      src="https://images.ctfassets.net/w65k7w0nsb8q/3QW7ADmNflXe9Q9IND2ZoL/c48066538691350e791af3ce758d407f/BlueLagoon-Hero2023.jpg?w=1920&q=75"
      alt="Blue Lagoon"
      className="background-image"
    />
    <div className="text-container">
      <h1>Discover the Wonder</h1>
      <p>
        Healing waters. A subterranean spa. Gourmet cuisine. Luxurious suites.
        Otherworldly vistas.
        <br />A universe of radiant wellbeing.
      </p>
      <div className="arrow-wrapper">
        <div className="arrow">&#8595;</div>
      </div>
    </div>
  </div>
);
};

export default Hero;
