import { useState, useEffect } from "react";

import GameBoard from "./GameBoard.jsx";
import GameStatus from "./GameStatus.jsx";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

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

  // initial retrieval of gameChars from db
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

  useEffect(() => {
    const score = gameCharacters.filter((char) => char.found).length;
    if (gameCharacters.length > 0 && score === gameCharacters.length) {
      setGameStatus("WON");
    }
  }, [gameCharacters]);

  console.log(gameCharacters);
  return (
    <div className="GameContainer">
      <GameStatus gameStatus={gameStatus} />
      <Timer />
      <Score gameCharacters={gameCharacters} />
      <GameBoard
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />

      <GameResultModal />
      <Leaderboard />
    </div>
  );
}
export default GameContainer;
