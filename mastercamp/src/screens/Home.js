import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import footAccImage from "./assets/footAcc.jpeg";
import tennisAccImage from "./assets/tennisAcc.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <div id="introAccueil">
        <h1>Accueil</h1>
        <p>Bienvenu sur notre site ! Retrouvez toutes les actualités :</p>
        <div id="info">
        <div className="pagefoot">
          <Link to="/page1" className="page-link"></Link>
        </div>
        <div className="pagetennis">
          <Link to="/page2" className="page-link"></Link>
        </div>
      </div>
      
      <div className="container">
      <div id="info">
        <a href="https://www.lequipe.fr/Football/" className="page-link">
          <img src={footAccImage} alt="Image de foot" className="image" />
        </a>
        <a href="https://www.lequipe.fr/Tennis/" className="page-link">
          <img src={tennisAccImage} alt="Image de tennis" className="image" />
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomePage;

/*

*/