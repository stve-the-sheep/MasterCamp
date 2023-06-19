import React, { useState } from "react";
import './Football.css';
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

  return (
    <div>
      <div id="intro0">
        <h1>Football</h1>
        <p>It's time to look for a UFA Champion league match</p>
        <p>Generate a match resume</p>
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Country 1" value={country1} onChange={handleCountry1Change} />
        <input type="text" placeholder="Country 2" value={country2} onChange={handleCountry2Change} />
        <button onClick={handleGenerateText}>Generate Text</button>
      </div>
      <div id="generated-text">
        {generatedText && <p>{generatedText}</p>}
      </div>
    </div>
  );
};

export default Football;
