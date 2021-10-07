import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content container">
        <section>
          <ul className="list-footer-one">
            <li>Logo</li>
            <li className="texto-white">
              <i>
                ONLY PAY FOR <span>SPORTS YOU LOVE</span>
              </i>
            </li>
            <li>
              <button className="footer-button">UPGRADE NOW</button>
            </li>
          </ul>
          <ul className="list-footer-two">
            <li>NFL</li>
            <li>NHL</li>
            <li>NBA</li>
            <li>MLB</li>
            <li>Soccer</li>
            <li>NASCAR</li>
            <li>Golf</li>
            <li>Olympic</li>
            <li>Motores</li>
            <li>Boxing</li>
            <li>Cycling</li>
            <li>Athletics</li>
          </ul>
        </section>
        <section className="section2">
          <div>
            <ul className="list-icons">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-google-plus-g"></i>
              </li>
              <li>
                <i class="fas fa-basketball-ball"></i>
              </li>
              <li>
                <i class="fas fa-wifi"></i>
              </li>
            </ul>
            <ul className="list-footer-f">
              <li>About US</li>
              <li>Adversite</li>
              <li>Sport Jobs</li>
              <li>term od Use</li>
              <li>My Account</li>
              <li>FAQ</li>
              <li>Watch on TV</li>
              <li>Help Center</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Copyright 2018, Vodi Plataform, INC, ALL Right Reserved</li>
            </ul>
          </div>
          <div>
            <div>
                <h1>Watch Vodi. Anytime. <br></br> Anywhere.</h1>
                <p>Suscribe to our newletter and get unique alerts.</p>
                <button className="footer-button mt-20">SING UP</button>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default Footer;
