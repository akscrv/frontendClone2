
import React, { useState } from 'react';
import './Nav.css'; 

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQLFLJndpHHnNZdQychngV69mc9tTzayCpfzQ2-sEXcOEbpG3WvcK09YwZ_WrdWSyZQI&usqp=CAU" alt="Blue Lagoon Iceland" />
      </div>

      
      <div className="hamburger" onClick={handleMenuClick}>
        <div className={`line ${showMenu ? 'active' : ''}`}></div>
        <div className={`line ${showMenu ? 'active' : ''}`}></div>
        <div className={`line ${showMenu ? 'active' : ''}`}></div>
      </div>

     
      <ul className={`menu ${showMenu ? 'active' : ''}`}>
        <li>Day Visit</li>
        <li>Accommodation</li>
        <li>Dining</li>
        <li>Skincare</li>
        <li>More</li>
      </ul>

     
      <div className="buttons">
        <button className="booking">My Booking</button>
        <button className="book-now">Book Now</button>
      </div>
    </nav>
  );
};

export default Nav;
