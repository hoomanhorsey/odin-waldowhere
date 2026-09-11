import { useState } from "react";

import "./GameResultsModal.css";

function GameResultsModal({ elapsedTime }) {
  const [playerName, setPlayername] = useState("");

  const handleSaveScore = (playerName, elapsedTime) => {
    if (playerName.trim()) {
      alert("send name to backend");
      console.log(playerName);
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
          onChange={(e) => setPlayername(e.target.value)}
        ></input>
        <button onClick={() => handleSaveScore(playerName, elapsedTime)}>
          Save your score
        </button>
      </div>
    </div>
  );
}

export default GameResultsModal;
