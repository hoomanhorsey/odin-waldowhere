import { useState } from "react";
import { formatTime } from "../utils/formatTime";

import "./GameResultsModal.css";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function GameResultsModal({
  elapsedTime,
  setLeaderboard,
  setGameStatus,
  mapId,
  setPlayerAction,
}) {
  const [playerName, setPlayerName] = useState("");

  const handleSaveScore = async (playerName, elapsedTime) => {
    if (playerName.trim()) {
      try {
        const response = await fetch(`${backendURL}/score/save-score`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mapId: mapId,
            playerName: playerName,
            elapsedTime: elapsedTime,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setLeaderboard(data.leaderboard);
          setGameStatus("COMPLETED");
          setPlayerAction("Displaying Leaderboard");
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>You've found everyone!!!</h1>
        <p>Time to find all the characters: {formatTime(elapsedTime)}s</p>

        <input
          id="playername"
          name="playername"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        ></input>
        <button onClick={() => handleSaveScore(playerName, elapsedTime)}>
          Save your score
        </button>
      </div>
    </div>
  );
}

export default GameResultsModal;
