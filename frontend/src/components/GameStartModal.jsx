import { useState } from "react";

import "./GameStartModal.css";

function GameStartModal({ setGameStatus }) {
  const startGame = () => {
    setGameStatus("TARGETING");
  };

  return (
    <div className="game-start-modal-overlay">
      <div className="game-start-modal-content">
        <h2 class="game-start-modal-heading">Game Start!</h2>
        <p>
          Can you help the Bureau locate and correctly identify Waldo, Wilma,
          Odlaw and the Wizard? They are considered highly dangerous and are
          wanted for questioning.
        </p>
        <button onClick={() => startGame()}>Start the Search! </button>
      </div>
    </div>
  );
}

export default GameStartModal;
