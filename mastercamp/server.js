const express = require("express");
const app = express();
const { spawn } = require("child_process");
const cors = require("cors");

app.use(cors());
app.get("/run-python", (req, res) => {
  const {
    event_first_player,
    // event_second_player,
    // event_final_result,
    // event_winner,
    // scores,
    // event_date,
    // tournament_name,
  } = req.query;

  const pythonProcess = spawn("python", [
    "C:/Users/Jiah/Documents/GitHub/MasterCamp/mastercamp/mlPut.py",
    event_first_player,

    // event_second_player,
    // event_final_result,
    // event_winner,
    // scores,
    // event_date,
    // tournament_name,
  ]);

  pythonProcess.stdout.on("data", (data) => {
    // Récupérer la sortie du script Python
    const output = data.toString();

    try {
      // Parser la sortie JSON
      const result = JSON.parse(output);

      // Renvoyer la sortie JSON en tant que réponse
      res.send(
        JSON.stringify({
          result: result,
        })
      );
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(
          "Une erreur s'est produite lors de l'exécution du script Python."
        );
    }
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
