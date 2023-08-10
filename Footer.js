import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
          <ul>
            <li style={{ marginBottom: "3rem", marginTop: "3rem" }}>
              <span style={{ fontSize: "1.8rem" }}>BLUE LAGOON</span> <br />
              ICELAND
            </li>
            <li>Norðurljósavegur 9</li>
            <li>240 Grindavík</li>
            <li style={{ marginBottom: "3.5rem" }}>
              <a style={{ color: "white" }} href="/">
                Show on map
              </a>
            </li>
            <li>Offices: Urriðaholtsstræti 2</li>
            <li>210 Garðabær</li>
            <li style={{ marginBottom: "3.5rem" }}>
              <a style={{ color: "white" }} href="/">
                Show on map
              </a>
            </li>
            <li>
              {" "}
              <button className="footer-btn">Contact us</button>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <div className="right-content">
            <div className="column">
              <b>SUPPORT</b>
              <ul>
                <li>How to get here</li>
                <li>Support Center</li>
                <li>Lost & found</li>
                <li>Meetings & Events</li>
                <li>Press Center</li>
                <li>Privacy policy</li>
                <li>Safety standards</li>
                <li>Terms & Cancellation policy</li>
              </ul>
            </div>
            <div className="column">
              <b>COMPANY</b>
              <ul>
                <li>About us</li>
                <li>CSR Report</li>
                <li>Psoriasis Treatments</li>
                <li>Travel Professionals</li>
                <li>Careers</li>
                <li>Gift cards</li>
                <li>Skincare</li>
                <li>Blue Lagoon 30 years</li>
              </ul>
            </div>
            <div className="signup">
              <p>Sign up for our world of wellbeing and wonder.</p>
              <form>
                <label htmlFor="email">Your email*</label>
                <br />
                <div className="signup-container">
                  <input type="email" id="email" name="email" required />
                  <button type="submit">Sign up</button>
                </div>
                <label className="signup-last">
                  <input type="checkbox" name="newsletter" required />
                  <div>
                    I want to receive your newsletter and I agree to the Blue
                    Lagoon
                    <span
                      style={{
                        display: "block",
                        color: "cadetblue",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      privacy policy
                    </span>
                  </div>
                </label>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-links">
            
              <a href="#"> <img style={{width:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTOokXJzVE0aOwt2d7Vw8OsVP8KcxAU_GINEYzxVoGnVj9ZMBVtAXstBCTSurIDV0yqg&usqp=CAU"/> Manage Booking</a>
              <a href="#">Currency <span style={{color:"cadetblue", fontWeight:"bold", fontSize:"1.1rem", marginLeft:"1rem"}}> $ USD</span></a>
              <a href="#">Language<span style={{color:"cadetblue", fontWeight:"bold", fontSize:"1.1rem", marginLeft:"1rem"}}>En</span></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
