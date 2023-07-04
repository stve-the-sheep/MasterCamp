import React, { useState } from "react";
import styles from "./TennisCard.module.css";
import TennisMatchSummary from "./TennisMatchSummary";

const TennisCard = ({ match }) => {
  const [showSummary, setShowSummary] = useState(false);
  const [result, setResult] = useState("");

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };
  const {
    event_first_player,
    event_first_player_logo,
    event_second_player,
    event_second_player_logo,
    event_final_result,
    event_winner,
    scores,
    event_date,
    tournament_name,
  } = match;

  const runPythonScript = () => {
    const params = {
      scriptPath:
        "C:/Users/Jiah/Documents/GitHub/MasterCamp/mastercamp/mlPut.py", // Set the script path according to your project structure
      args: [
        event_first_player,
        // event_second_player,
        // event_final_result,
        // event_winner,
        // JSON.stringify(scores), // Convert the scores array to a JSON string
        // event_date,
        // tournament_name,
      ],
    };
    console.log(event_first_player);
    const queryParams = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");
    console.log(JSON.stringify(queryParams));
    fetch(`http://localhost:3000/run-python?${queryParams}`)
      .then((response) => response.text())
      .then((data) => {
        setResult(data);
        console.log(data);
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
          <img src={event_first_player_logo} alt={event_first_player} />
          <span>{event_first_player}</span>
        </div>
        <div className={styles["player"]}>
          <img src={event_second_player_logo} alt={event_second_player} />
          <span>{event_second_player}</span>
        </div>
      </div>
      <div className={styles["match-info"]}>
        <div className={styles["score"]}>{event_final_result}</div>
        <div className={styles["winner"]}>
          Winner:{" "}
          {event_winner === "First Player"
            ? event_first_player
            : event_winner === "Second Player"
            ? event_second_player
            : event_second_player}
        </div>
        <div className={styles["sets"]}>
          {scores.map((set, index) => (
            <div key={index} className={styles["set"]}>
              {set.score_first}-{set.score_second}
            </div>
          ))}
        </div>
        <div className={styles["date"]}>{event_date}</div>
        <div className={styles["tournament"]}>{tournament_name}</div>
        <button onClick={toggleSummary}>Voir le résumé</button>
        <button onClick={runPythonScript}>Voir le ml</button>
        <div>{result}</div>
        {showSummary && <TennisMatchSummary match={match} />}
      </div>
    </div>
  );
};

export default TennisCard;
