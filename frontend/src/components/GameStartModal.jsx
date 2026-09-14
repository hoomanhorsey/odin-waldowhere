import { useState } from "react";

import "./GameStartModal.css";

function GameStartModal({}) {
  const startGame = async () => {};

  return (
    <div className="game-start-modal-overlay">
      <div className="game-start-modal-content">
        <h2>Game Start!</h2>

        <button onClick={() => startGame()}>Start the Search! </button>
      </div>
    </div>
  );
}

export default GameStartModal;
