import { useState, useEffect } from "react";

import GameBoard from "./GameBoard.jsx";
import GameStatus from "./GameStatus.jsx";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

import GameStartModal from "./GameStartModal.jsx";
import GameResultsModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";

function GameContainer() {
  const [gameStatus, setGameStatus] = useState("IDLE");
  // IDLE, TARGETING, SELECTINGCHARACTER, WON, COMPLETED

  const [gameCharacters, setGameCharacters] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(999999);
  // const [userClickCoordinates, setUserClickCoordinates] = useState(false);
  // const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [leaderboard, setLeaderboard] = useState(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (gameStatus !== "TARGETING") return;

    let startTime = Date.now();
    let intervalId;

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimer(elapsed);
    };

    intervalId = setInterval(tick, 1000); // Run once per second

    return () => clearInterval(intervalId);
  }, [gameStatus]);

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
    if (
      gameCharacters.length > 0 &&
      score === gameCharacters.length
      // // NOTE - TEST WIN CONDITION. WIN BY DEFAULT TO TEST MODAL
      // if (gameCharacters.length)
    ) {
      setGameStatus("WON");

      // NEED TO INSERT CONSEQUNCES
    }
  }, [gameCharacters]);

  console.log(gameCharacters);
  return (
    <div className="GameContainer">
      <GameStatus gameStatus={gameStatus} />
      <Timer timer={timer} />
      <Score gameCharacters={gameCharacters} />
      <GameBoard
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gameCharacters={gameCharacters}
        setGameCharacters={setGameCharacters}
      />

      {gameStatus === "WON" && (
        <GameResultsModal
          elapsedTime={elapsedTime}
          setLeaderboard={setLeaderboard}
          setGameStatus={setGameStatus}
        />
      )}
      {gameStatus === "COMPLETED" && (
        <Leaderboard leaderboard={leaderboard} setGameStatus={setGameStatus} />
      )}

      {gameStatus === "IDLE" && (
        <GameStartModal setGameStatus={setGameStatus} setTimer={setTimer} />
      )}
    </div>
  );
}
export default GameContainer;
