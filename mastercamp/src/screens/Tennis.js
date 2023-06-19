import React, { useState } from "react";
import './Tennis.css';

const Tennis = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [year, setYear] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handlePlayer1Change = (event) => {
    setPlayer1(event.target.value);
  };

  const handlePlayer2Change = (event) => {
    setPlayer2(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleGenerateText = () => {
    // Generate text based on player1, player2, and year
    setGeneratedText(`Generated text for ${player1} vs ${player2} in ${year}`);
  };

  return (
    <div>
      <div id="intro">
        <h1>Tennis</h1>
        <p>It's time to look for a tennis match</p>
        <p>Generate a match resume</p>
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Player 1" value={player1} onChange={handlePlayer1Change} />
        <input type="text" placeholder="Player 2" value={player2} onChange={handlePlayer2Change} />
        <input type="text" placeholder="Year" value={year} onChange={handleYearChange} />
        <button onClick={handleGenerateText}>Generate Text</button>
      </div>
      <div id="generated-text">
        {generatedText && <p>{generatedText}</p>}
      </div>
    </div>
  );
};

export default Tennis;
