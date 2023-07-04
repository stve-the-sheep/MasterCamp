import React, { useState } from "react";
import styles from "./TennisCard.module.css";
import TennisMatchSummary from "./TennisMatchSummary";

const TennisCard = ({ match }) => {
  const [showSummary, setShowSummary] = useState(false);
  const [result, setResult] = useState("");

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const runPythonScript = () => {
    const params = {
      scriptPath:
        "C:/Users/Jiah/Documents/GitHub/MasterCamp/mastercamp/mlPut.py", // Set the script path according to your project structure
      args: [
        match.event_first_player,
        // match.event_second_player,
        // match.event_final_result,
        // match.event_winner,
        // JSON.stringify(match.scores), // Convert the scores array to a JSON string
        // match.event_date,
        // match.tournament_name,
      ],
    };

    const queryParams = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    fetch(`http://localhost:3000/run-python?${queryParams}`)
      .then((response) => response.text())
      .then((data) => {
        setResult(data);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
        setResult("Une erreur s'est produite lors de l'appel à l'API.");
      });
  };

  return (
    <div className={styles["tennis-card"]}>
      <div className={styles["player-info"]}>
        <div className={styles["player"]}>
          <img
            src={match.event_first_player_logo}
            alt={match.event_first_player}
          />
          <span>{match.event_first_player}</span>
        </div>
        <div className={styles["player"]}>
          <img
            src={match.event_second_player_logo}
            alt={match.event_second_player}
          />
          <span>{match.event_second_player}</span>
        </div>
      </div>
      <div className={styles["match-info"]}>
        <div className={styles["score"]}>{match.event_final_result}</div>
        <div className={styles["winner"]}>
          Winner:{" "}
          {match.event_winner === "First Player"
            ? match.event_first_player
            : match.event_winner === "Second Player"
            ? match.event_second_player
            : match.event_second_player}
        </div>
        <div className={styles["sets"]}>
          {match.scores.map((set, index) => (
            <div key={index} className={styles["set"]}>
              {set.score_first}-{set.score_second}
            </div>
          ))}
        </div>
        <div className={styles["date"]}>{match.event_date}</div>
        <div className={styles["tournament"]}>{match.tournament_name}</div>
        <button onClick={toggleSummary}>Voir le résumé</button>
        <button onClick={runPythonScript}>Voir le ml</button>
        {result && <div className={styles["result"]}>{result}</div>}
        {showSummary && <TennisMatchSummary match={match} />}
      </div>
    </div>
  );
};

export default TennisCard;
