import React, { useState } from "react";

const Inscription = () => {
  const [numLicence, setNumLicence] = useState("");
  const [Userprenom, setUserprenom] = useState("");
  const [Usernom, setUsernom] = useState("");
  const [Usermail, setUsermail] = useState("");
  const [Userpassword, setUserpassword] = useState("");

  const handleRetourConnexion = () => {
    // Ajoutez ici la logique de redirection vers la page de connexion
  };

  const AddUser = () => {
    // Ajoutez ici la logique d'ajout de l'utilisateur dans votre base de données
  };

  return (
    <div className="background">
      <h1 className="titre">Inscription</h1>
      <div className="container">
        <input
          type="text"
          className="textezone"
          placeholder="Numéro de licence"
          value={numLicence}
          onChange={(e) => setNumLicence(e.target.value)}
        />
        <input
          type="text"
          className="textezone"
          placeholder="Prénom"
          value={Userprenom}
          onChange={(e) => setUserprenom(e.target.value)}
        />
        <input
          type="text"
          className="textezone"
          placeholder="Nom"
          value={Usernom}
          onChange={(e) => setUsernom(e.target.value)}
        />
        <input
          type="text"
          className="textezone"
          placeholder="Email"
          value={Usermail}
          onChange={(e) => setUsermail(e.target.value)}
        />
        <input
          type="password"
          className="textezone"
          placeholder="Mot de passe"
          value={Userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />
        <button className="button" onClick={AddUser}>
          S'inscrire
        </button>
        <button onClick={handleRetourConnexion}>
          Retourner à la page de Connexion
        </button>
      </div>
    </div>
  );
};

export default Inscription;
