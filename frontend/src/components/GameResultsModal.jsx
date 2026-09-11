import { useState } from "react";

import "./GameResultsModal.css";

function GameResultsModal({ elapsedTime }) {
  const [playerName, setPlayerName] = useState("");

  const handleSaveScore = async (playerName, elapsedTime) => {
    if (playerName.trim()) {
      alert("send name to backend");

      try {
        const response = await fetch("http://localhost:3000/score/save-score", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            playerName: playerName,
            elapsedTime: elapsedTime,
          }),
        });

        const data = await response.json();

        if (data.success) // TODO insert the fetch backend call
        {
          alert("yeah");
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
        <h2>Game Complete!</h2>
        <p>Time to find all the characters: {elapsedTime}s</p>

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
