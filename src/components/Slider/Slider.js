import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="Slider">
      <div className="slide-content">
        <div className="imagen">
          <img src="https://s1.1zoom.me/big0/986/Human_back_Hands_Braid_493900.jpg"></img>
        </div>
        <div className="slider-text-content container">
          <div className="slide-text">
            <h1>coming Soon</h1>
            <h4>Live stars in 7 days 17 h 58 mn 41 s</h4>
            <h1>Rugby Union World Cup</h1>
            <h4>LIVE coverage on the 24th of June 2018</h4>
            <button className="buttom-slider"> + GET NOTIFIED</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
