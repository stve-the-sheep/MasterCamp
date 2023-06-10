import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState, useEffect, useDebugValue } from "react";
import { AppRegistry, TextInputBase, alert } from "react-native";
import * as SQLite from "expo-sqlite";
import NavigationDrawer from "./Components/NavigationDrawer";

const db = SQLite.openDatabase("ma_base_de_donnees.db");

export default function App() {
  useEffect(() => {
    // createTables();
    // insertData();
    fetchData();
    // DelData();
  }, []);

  const createTables = () => {
    db.transaction((txn) => {
      // Création de la table User
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS User (ID INTEGER PRIMARY KEY, User_prenom TEXT, User_nom TEXT,  User_mail TEXT, User_passwords TEXT)",
        [],
        () => {
          console.log("User table created successfully");
        },
        (_, error) => {
          console.log("Error creating user table ", error);
        }
      );

      const db = SQLite.openDatabase("ma_base_de_donnees.db");

      // Création de la table LocalData
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS LocalData (id INTEGER PRIMARY KEY AUTOINCREMENT, key TEXT UNIQUE, value TEXT)",
        [],
        () => {
          console.log("Table LocalData créée avec succès");
        },
        (_, error) => {
          console.error(
            "Erreur lors de la création de la table LocalData",
            error
          );
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
            // console.log("Résultat de la requête :", row);
          }
        },
        (_, error) => {
          console.log("Erreur lors de la requête :", error);
        }
      );
    });
  };

  const DelData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM User",
        [],
        (_, resultSet) => {
          console.log("Suppression réussie pour User !");
        },
        (_, error) => {
          console.log("Erreur lors de la suppression de User :", error);
        }
      );
    });
  };
  return <NavigationDrawer />;
}

AppRegistry.registerComponent("App", () => App);