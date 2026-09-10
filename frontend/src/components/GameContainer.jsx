import { useState, useEffect } from "react";

import GameBoard from "./GameBoard.jsx";
import Timer from "./Timer.jsx";

import GameResultModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";

function GameContainer() {
  const [gameStatus, setGameStatus] = useState("TARGETING");
  // IDLE, TARGETING, SELECTINGCHARACTER, WON, COMPLETED

  const [gameCharacters, setGameCharacters] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  // const [userClickCoordinates, setUserClickCoordinates] = useState(false);
  // const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          "http://localhost:3000/characters/characters",
        );
        const data = await response.json();
        if (data.success) {
          setGameCharacters(data.characterNames);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);

  console.log(gameCharacters);
  return (
    <div className="GameContainer">
      <GameBoard
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />
      <Timer />
      <GameResultModal />
      <Leaderboard />
    </div>
  );
}
export default GameContainer;
