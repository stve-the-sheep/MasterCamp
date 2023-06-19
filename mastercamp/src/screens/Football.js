import React from "react";
import { Link } from "react-router-dom";
import './Football.css';

const Football = () => {
  return (
    <div>
      <div id="intro0">
        <h1>Football</h1>
        <p>It's time to look for a football match</p>
        <p>Generate a match resume</p>
      </div>
      <div id="matchfoot">
        <div className="match1">
          <Link to="/matchfoot1" className="match-link"></Link>
        </div>
        <div className="match2">
          <Link to="/matchfoot2" className="match-link"></Link>
        </div>
        <div className="match3">
          <Link to="/matchfoot3" className="match-link"></Link>
        </div>
        <div className="match4">
          <Link to="/matchfoot4" className="match-link"></Link>
        </div>
        <div className="match5">
          <Link to="/matchfoot5" className="match-link"></Link>
        </div>
      </div>
    </div>
  );
};

export default Football;
