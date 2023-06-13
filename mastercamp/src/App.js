import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Football from "./screens/Football";
import Tennis from "./screens/Tennis";
import Connexion from "./screens/Connexion";
import Inscription from "./screens/Inscription";
import About from "./screens/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Tennis />} />
          <Route path="/tennis" element={<Football />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/signup" element={<Inscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
