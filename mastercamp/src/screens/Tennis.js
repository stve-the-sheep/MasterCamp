import React, { useState, useEffect } from "react";
import "./Tennis.css";
import axios from "axios";

const Tennis = () => {
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
    <div id="tennis-page">
      <h1>Tennis Matches</h1>
      {matches.map((match) => (
        <div key={match.event_key} className="tennis-card">
          <div className="player-info">
            <div className="player">
              <img
                src={match.event_first_player_logo}
                alt={match.event_first_player}
              />
              <span>{match.event_first_player}</span>
            </div>
            <div className="player">
              <img
                src={match.event_second_player_logo}
                alt={match.event_second_player}
              />
              <span>{match.event_second_player}</span>
            </div>
          </div>
          <div className="match-info">
            <div className="score">{match.event_final_result}</div>
            <div className="winner">{match.event_winner}</div>
            <div className="sets">
              {match.scores.map((set, index) => (
                <div key={index} className="set">
                  {set.score_first}-{set.score_second}
                </div>
              ))}
            </div>
            <div className="date">{match.event_date}</div>
            <div className="tournament">{match.tournament_name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tennis;
