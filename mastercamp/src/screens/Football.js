import React, { useState, useEffect } from "react";
import "./Football.css";
import axios from "axios";

const Football = () => {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleCountry1Change = (event) => {
    setCountry1(event.target.value);
  };

  const handleCountry2Change = (event) => {
    setCountry2(event.target.value);
  };

  const handleGenerateText = () => {
    setGeneratedText(`Generated text for ${country1} vs ${country2}`);
  };

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=b5e3131ee1401ec54fe79909dfbe13db10496ae7f2393655a76e0a475ad04bbc&date_start=2023-06-04&date_stop=2023-06-15&tournament_key=2155"
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <div id="intro0">
        <h1>Football</h1>
        <p>It's time to look for a UFA Champion league match</p>
        <p>Generate a match resume</p>
      </div>
      <div id="search-bar">
        <button onClick={handleGenerateText}>Generate Text</button>
      </div>
      <div id="generated-text">{generatedText && <p>{generatedText}</p>}</div>
    </div>
  );
};

export default Football;
