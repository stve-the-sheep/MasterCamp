import React, { useEffect, useState } from "react";
import TennisCard from "../components/TennisCard";
import axios from "axios";

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=cdebb20c60c20fd5e8882c6d9959d61aac91006dd7ba0c0b675025da766905ab&date_start=2023-06-04&date_stop=2023-06-15&tournament_key=2155"
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
