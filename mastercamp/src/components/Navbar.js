import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">Accueil</Link>
          <Link to="/football">Football</Link>
          <Link to="/tennis">Tennis</Link>
          <Link to="/about">À propos</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">Connexion</Link>
          <Link to="/signup">Inscription</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
