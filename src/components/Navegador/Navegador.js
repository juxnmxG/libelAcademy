import React from "react";
import "./Navegador.css";
function Navegador() {
  return (
    <div className="box-navigation">
      <nav className="container">
        <div>
          <h2>Logo</h2>
        </div>
        <ul className="list">
          <li>Wacth</li>
          <li>NFL</li>
          <li>NHL</li>
          <li>NBA</li>
          <li>Soccer</li>
          <li>NASCAR</li>
          <li>Golf</li>
          <li className="text-icon">MORE<i class="fas fa-chevron-down"></i></li>
        </ul>
        <ul className="list">
          <li>Replays</li>
          <li>Higlights</li>
          <li>Guide</li>
          <li><i class="fas fa-search"></i></li>
          <li><i class="far fa-bell"></i></li>
          <li><i class="fas fa-user-circle"></i></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navegador;
