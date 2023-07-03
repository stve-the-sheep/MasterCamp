import React, { useEffect, useState } from "react";
import TennisCard from "../components/TennisCard";
import axios from "axios";

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=b5e3131ee1401ec54fe79909dfbe13db10496ae7f2393655a76e0a475ad04bbc&date_start=2023-06-04&date_stop=2023-06-15&tournament_key=2155"
        );
        setMatches(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Matchs de tennis</h1>
      {matches.map((match) => (
        <TennisCard key={match.event_key} match={match} />
      ))}
    </div>
  );
};

export default MatchScreen;
