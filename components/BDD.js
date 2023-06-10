import React, { useEffect } from "react";
import { SQLite } from "react-native-sqlite-storage";

const DatabaseManager = () => {
  useEffect(() => {
    const db = SQLite.openDatabase(
      {
        name: "mydatabase.db",
        location: "default",
      },
      () => {
        console.log("Database opened successfully");
        createTables();
        insertData();
        fetchData();
      },
      (error) => {
        console.log("Error opening database: ", error);
      }
    );

    const createTables = () => {
      db.transaction((txn) => {
        // Création de la table User
        txn.executeSql(
          "CREATE TABLE IF NOT EXISTS User (ID int primary key, User_prenom TEXT, User_nom TEXT,User_mail TEXT, User_passwords TEXT)",
          [],
          () => {
            console.log("User table created successfully");
          },
          (_, error) => {
            console.log("Error creating user table ", error);
          }
        );
      });
    };

    const insertData = () => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO User (ID, User_prenom, User_nom, User_mail, User_passwords) VALUES (?, ?, ?, ?, ?)",
          ["1", "Pierre", "Jean", "pierrejean@gmail.com", "123"],
          (_, resultSet) => {
            console.log("Insertion réussie !");
          },
          (_, error) => {
            console.log("Erreur lors de l'insertion User:", error);
          }
        );
      });
    };

    const fetchData = () => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM User",
          [],
          (_, resultSet) => {
            const rows = resultSet.rows;
            for (let i = 0; i < rows.length; i++) {
              const row = rows.item(i);
              console.log("Résultat de la requête User :", row);
            }
          },
          (_, error) => {
            console.log("Erreur lors de la requête User :", error);
          }
        );
      });
    };
  }, []);

  return null;
};

export default DatabaseManager;