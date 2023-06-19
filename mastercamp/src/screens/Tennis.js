import React, { useState } from "react";
import './Tennis.css';

const Tennis = () => {
  const [selectedMatch, setSelectedMatch] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleMatchSelection = (event) => {
    setSelectedMatch(event.target.value);
  };

  const handleGenerateText = () => {
    // Generate text based on selectedMatch
    setGeneratedText(`Generated text for ${selectedMatch}`);
  };

  return (
    <div>
      <div id="intro">
        <h1>Tennis</h1>
        <p>It's time to look for a tennis match</p>
        <p>Generate a match resume</p>
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Search for a tennis match" value={selectedMatch} onChange={handleMatchSelection} />
        <button onClick={handleGenerateText}>Generate Text</button>
      </div>
      <div id="generated-text">
        {generatedText && <p>{generatedText}</p>}
      </div>
    </div>
  );
};

export default Tennis;
