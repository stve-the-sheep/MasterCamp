import React from "react";
import "./TennisCard.css";

const TennisCard = ({ match }) => {
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

  return (
    <div className="tennis-card">
      <div className="player-info">
        <div className="player">
          <img src={event_first_player_logo} alt={event_first_player} />
          <span>{event_first_player}</span>
        </div>
        <div className="player">
          <img src={event_second_player_logo} alt={event_second_player} />
          <span>{event_second_player}</span>
        </div>
      </div>
      <div className="match-info">
        <div className="score">{event_final_result}</div>
        <div className="winner">Winner: {event_winner}</div>
        <div className="sets">
          {scores.map((set, index) => (
            <div key={index} className="set">
              {set.score_first}-{set.score_second}
            </div>
          ))}
        </div>
        <div className="date">{event_date}</div>
        <div className="tournament">{tournament_name}</div>
      </div>
    </div>
  );
};

export default TennisCard;
