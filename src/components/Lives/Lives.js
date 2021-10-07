import React from "react";
import "./Lives.css";
function Lives() {
  return (
    <div className="lives container">
      <section className="colunm-iz">
        <h3 className="text-gris">LIVE NOW</h3>
        <div className="box-lives">
          <figure>
            <img src="https://i.picsum.photos/id/799/244/138.jpg?hmac=PVMY122rsOXjP-dDKv3lEAiCs7W9ybco0vECtEqrK9Q"></img>
          </figure>
          <div className="box-live-content">
            <div>
              <h5 className="text-gris">
                <span className="bg-red">LIVE</span>Racing Motorsports-Le Mans
              </h5>
              <h3 className="mtb-20">
                2018 le mans 24 Hours - Car GT Onboard, Race Timing
              </h3>
              <h5>
                <span className="text-gris">on</span> XtremeSports3
              </h5>
              <p className="text-gris">1.02k viewers</p>
            </div>
            <div>
              <button className="buttom-live">
                <i className="far fa-play-circle"></i>Watch now!
              </button>
            </div>
          </div>
        </div>
        <div className="box-lives">
          <figure>
            <img src="https://s1.1zoom.me/big0/986/Human_back_Hands_Braid_493900.jpg"></img>
          </figure>
          <div className="box-live-content">
            <div>
              <h5 className="text-gris">
                <span className="bg-red">LIVE</span>Rugby - Africa
              </h5>
              <h3 className="mtb-20">Rugby Adrica Gold Cup/2019 Qualifiers </h3>
              <h5>
                <span className="text-gris">on</span> KweseRug
              </h5>
              <p className="text-gris">21K viewers</p>
            </div>
            <div>
              <button className="buttom-live">
                <i className="far fa-play-circle"></i>Watch now!
              </button>
            </div>
          </div>
        </div>
        <div className="box-lives">
          <figure>
            <img src="https://s1.1zoom.me/big0/673/Basketball_Men_Black_background_Jump_Hands_Ball_582562_1280x854.jpg"></img>
          </figure>
          <div className="box-live-content">
            <div>
              <h5 className="text-gris">
                <span className="bg-red">LIVE</span>Rguby - Africa
              </h5>
              <h3 className="mtb-20">National Cup - 2018: Fans Eye Views</h3>
              <h5>
                <span className="text-gris">on</span> RTower1989
              </h5>
              <p className="text-gris">944 viewers</p>
            </div>
            <div>
              <button className="buttom-live">
                <i className="far fa-play-circle"></i>Watch now!
              </button>
            </div>
          </div>
        </div>
        <p className="mt-20 text-gris">VIEW ALL</p>
      </section>
      <section className="colunm-dr">
        <h3 className="text-gris">COMING SOON</h3>
        <div className="box-coming">
          <div className="box-coming-content">
            <div>
              <h1 className="text-gris">12:00</h1>
              <p className="text-gris">17 June</p>
            </div>
            <div>
              <h5 className="text-gris">
                <span className="bg-red">LIVE</span>Racing Motorsports - WC
              </h5>
              <h4>World Cup Endurance, Spain</h4>
              <h6 className="text-gris">time left 2 hours 15 min 47 sec</h6>
            </div>
          </div>
        </div>
        <div className="box-coming">
          <div className="box-coming-content">
            <div>
              <h1 className="text-gris">13:50</h1>
              <p className="text-gris">17 June</p>
            </div>
            <div>
              <h5 className="text-gris">Racing Motorsports - WC</h5>
              <h4>College World Series: Texas Tech vs Florida</h4>
              <h6 className="text-gris">time left 2 hours 15 min 47 sec</h6>
            </div>
          </div>
        </div>
        <div className="box-coming">
          <div className="box-coming-content">
            <div>
              <h1 className="text-gris">12:00</h1>
              <p className="text-gris">17 June</p>
            </div>
            <div>
              <h5 className="text-gris">Racing Motorsports - WC</h5>
              <h4>World Cup Endurance, Spain</h4>
              <h6 className="text-gris">time left 2 hours 15 min 47 sec</h6>
            </div>
          </div>
        </div>
        <p className="mt-20 text-gris">VIEW ALL</p>
      </section>
    </div>
  );
}

export default Lives;
