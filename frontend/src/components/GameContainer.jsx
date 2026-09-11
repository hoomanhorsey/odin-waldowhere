import { useState, useEffect } from "react";

import GameBoard from "./GameBoard.jsx";
import GameStatus from "./GameStatus.jsx";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

import GameResultsModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";

function GameContainer() {
  const [gameStatus, setGameStatus] = useState("TARGETING");
  // IDLE, TARGETING, SELECTINGCHARACTER, WON, COMPLETED

  const [gameCharacters, setGameCharacters] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(999999);
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
          setGameCharacters(data.characters);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchCharacters();
  }, []);

  // check for Win condition
  useEffect(() => {
    const score = gameCharacters.filter((char) => char.found).length;
    // if (gameCharacters.length > 0 && score === gameCharacters.length)

    // NOTE - TEST WIN CONDITION. WIN BY DEFAULT TO TEST MODAL
    if (gameCharacters.length) {
      setGameStatus("WON");

      // NEED TO INSERT CONSEQUNCES
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

      {gameStatus === "WON" && <GameResultsModal elapsedTime={elapsedTime} />}
      <Leaderboard />
    </div>
  );
}
export default GameContainer;
