import React, { useState, useEff } from "react";
import styles from "./TennisCard.module.css";
import TennisMatchSummary from "./TennisMatchSummary";
import { PythonShell } from 'python-shell';

const TennisCard = ({ match }) => {
  const [showSummary, setShowSummary] = useState(false);

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

const runPythonScript = ()=> {
  const options = {
    scriptPath: './ML PUT.py', // Set the script path according to your project structure
    args: [
      event_first_player,
      event_first_player_logo,
      event_second_player,
      event_second_player_logo,
      event_final_result,
      event_winner,
      JSON.stringify(scores), // Convert the scores array to a JSON string
      event_date,
      tournament_name,
    ],
  };

  PythonShell.run('./ML PUT.py', options, function (err, results) {
    if (err) throw err;
    console.log('Python script executed successfully.');
    console.log('Results:', results);
  });}
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
        <button onClick={runPythonScript}>ML</button>
        {showSummary && <TennisMatchSummary match={match} />}
      </div>
    </div>
  );
};


export default TennisCard;
