const express = require("express");
const app = express();
const { spawn } = require("child_process");

app.get("/run-python", (req, res) => {
  const {
    firstPlayer,
    secondPlayer,
    finalResult,
    winner,
    scores,
    date,
    tournamentName,
  } = req.query;

  const pythonProcess = spawn("python", [
    "C:/Users/Jiah/Documents/GitHub/MasterCamp/mastercamp/src/components/mlPut.py",
    firstPlayer,
    secondPlayer,
    finalResult,
    winner,
    scores,
    date,
    tournamentName,
  ]);

  pythonProcess.stdout.on("data", (data) => {
    // Récupérer la sortie du script Python
    const output = data.toString();
    res.send(output);
  });

  pythonProcess.stderr.on("data", (data) => {
    // Récupérer les erreurs éventuelles du script Python
    const error = data.toString();
    console.error(error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de l'exécution du script Python.");
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
