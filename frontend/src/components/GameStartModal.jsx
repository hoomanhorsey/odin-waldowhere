import { useState } from "react";

import "./GameStartModal.css";

function GameStartModal({
  setGameStatus,
  mapObjectMessage,
  mapObjectCharacters,
}) {
  const startGame = () => {
    setGameStatus("TARGETING");
  };

  return (
    <div className="game-start-modal-overlay">
      <div className="game-start-modal-content">
        <h2 className="game-start-modal-heading">Game Start!</h2>
        <p>{mapObjectMessage}</p>
        <p>You will need to find: </p>
        <ul>
          {mapObjectCharacters.map((char) => {
            return <li key={char.name}>{char.name}</li>;
          })}
        </ul>
        <button onClick={() => startGame()}>Start the Search! </button>
      </div>
    </div>
  );
}

export default GameStartModal;
