import React, { useEffect } from "react";

const DatabaseManager = () => {
  useEffect(() => {
    const createTables = () => {
      // Création de la table User
      // Remplacez le code de création de la table ici
      console.log("User table created successfully");
    };

    const insertData = () => {
      // Insertion des données dans la table User
      // Remplacez le code d'insertion ici
      console.log("Insertion réussie !");
    };

    const fetchData = () => {
      // Récupération des données de la table User
      // Remplacez le code de récupération ici
      console.log("Résultat de la requête User :", row);
    };

    console.log("Database opened successfully");
    createTables();
    insertData();
    fetchData();
  }, []);

  return null;
};

export default DatabaseManager;
