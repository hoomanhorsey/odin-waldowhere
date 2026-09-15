import "./Leaderboard.css";
import { formatTime } from "../utils/formatTime";

import { useState } from "react";

function Leaderboard({ leaderboard, setGameStatus }) {
  function restartGame() {
    alert("restart button pressed");
    setGameStatus("IDLE");
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Leaderboard</h2>

        {leaderboard.map((player, index) => (
          <p key={player.id}>
            {index + 1} | {player.name} | {formatTime(player.elapsedTime)} |
            {new Date(player.createdAt).toLocaleDateString()}
          </p>
        ))}

        <button onClick={() => restartGame()}>Restart game</button>
      </div>
    </div>
  );
}

export default Leaderboard;
