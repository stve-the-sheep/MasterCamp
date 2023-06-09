import React, { useContext } from 'react';
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import './Navbar.css';

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnect, please check your internet connexion and retry."
      );
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MSC-218
      </Link>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/football" className="nav-link">Football</Link>
          <Link to="/tennis" className="nav-link">Tennis</Link>
          <Link to="/about" className="nav-link">À propos</Link>
        </div>
        <div className="navbar-right">
          <div>
            <button onClick={() => toggleModals("signUp")} className="btn btn-primary">
              Sign Up
            </button>
            <button onClick={() => toggleModals("signIn")} className="btn btn-primary ms-2">
              Sign In
            </button>
            <button onClick={logOut} className="btn btn-danger ms-2">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
