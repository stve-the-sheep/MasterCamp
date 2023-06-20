import React from 'react';
import './TennisMatchSummary.css';

const TennisMatchSummary = ({ match }) => {
  const {
    event_date,
    event_time,
    event_first_player,
    event_second_player,
    tournament_name,
    event_type_type,
    event_live,
    event_first_player_logo,
    event_second_player_logo,
  } = match;

  return (
    <div className="tennis-match-summary">
      <h2>{tournament_name}</h2>
      <p>Date : {event_date}</p>
      <p>Heure : {event_time}</p>
      <p>Type de match : {event_type_type}</p>
      <p>Statut : {event_live === '1' ? 'En direct' : 'Terminé'}</p>
      <p>Joueur 1 : {event_first_player}</p>
      {event_first_player_logo && <img src={event_first_player_logo} alt="Logo du joueur 1" />}
      <p>Joueur 2 : {event_second_player}</p>
      {event_second_player_logo && <img src={event_second_player_logo} alt="Logo du joueur 2" />}
    </div>
  );
};

export default TennisMatchSummary;
