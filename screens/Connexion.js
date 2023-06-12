import React, { useState } from "react";

const Connexion = () => {
  const [numLicence, setNumLicence] = useState("");
  const [password, setPassword] = useState("");

  const seConnecter = async (numLicence, password) => {
    try {
      const response = await fetch("votre_url_de_requete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numLicence, password }),
      });

      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Erreur lors de la requête de connexion");
    }
  };

  const handleConnexion = async () => {
    try {
      const user = await seConnecter(numLicence, password);
      if (user) {
        // Utilisateur connecté, effectuer les actions nécessaires
      } else {
        // Aucun utilisateur correspondant trouvé, afficher un message d'erreur ou effectuer d'autres actions
      }
    } catch (error) {
      // Erreur lors de l'exécution de la requête de connexion, gérer l'erreur appropriée
    }
  };

  return (
    <div className="background">
      <img src={require("../Images/Logo.png")} className="logo" alt="Logo" />
      <h1 className="titre">EasyOrga</h1>
      <div className="container">
        <label className="texte">Numéro de licence</label>
        <input
          type="text"
          className="textezone"
          placeholder="..."
          value={numLicence}
          onChange={(e) => setNumLicence(e.target.value)}
        />

        <label className="texte">Mot de passe</label>
        <input
          type="password"
          className="textezone"
          placeholder="..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleConnexion}>
          Se connecter
        </button>

        <button onClick={() => navigation.navigate("Inscription")}>
          S'inscrire
        </button>
      </div>
    </div>
  );
};

export default Connexion;
