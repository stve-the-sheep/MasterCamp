import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Football from "./screens/Football";
import Tennis from "./screens/Tennis";
import Connexion from "./screens/Connexion";
import Inscription from "./screens/Inscription";
import About from "./screens/About";
import "./App.css";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"

function App() {
  return (
      <div>
      <SignUpModal />
      <SignInModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/tennis" element={< Tennis/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/signup" element={<Inscription />} />
        </Routes>
      </div>
  );
}

export default App;
