import { useState, useEffect, useRef } from "react";

import "./GameContainer.css";

import MapSelect from "./MapSelect.jsx";
import GameBoard from "./GameBoard.jsx";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

import GameStartModal from "./GameStartModal.jsx";
import GameResultsModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";
import RemainingCharacters from "./RemainingCharacters.jsx";

function GameContainer() {
  const [gameStatus, setGameStatus] = useState("MAPSELECT");
  // MAPSELECT, IDLE, TARGETING, SELECTINGCHARACTER, WON, COMPLETED

  const [mapObject, setMapObject] = useState(null);
  const [gameCharacters, setGameCharacters] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(null);
  // const [userClickCoordinates, setUserClickCoordinates] = useState(false);
  // const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [leaderboard, setLeaderboard] = useState(null);
  const [timer, setTimer] = useState(0);

  // EFFECT: Reset timer when game returns to IDLE
  useEffect(() => {
    if (gameStatus === "IDLE") {
      startTimeRef.current = null;
      setTimer(0);
    }
  }, [gameStatus]);

  // EFFECT: Run/stop interval timer during active gameplay
  const startTimeRef = useRef(null);
  useEffect(() => {
    if (gameStatus !== "TARGETING" && gameStatus !== "SELECTINGCHARACTER")
      return;

    // Only set startTime once, when timer first starts
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setTimer(elapsed);
    };

    const intervalId = setInterval(tick, 1000); // Run once per second

    return () => clearInterval(intervalId);
  }, [gameStatus]);

  // EFFECT: Fetch characters when game is IDLE (initial load & reset)
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

    if (gameStatus === "IDLE") {
      fetchCharacters();
    }
  }, [gameStatus]);

  // EFFECT: Check win condition whenever characters are found
  useEffect(() => {
    const score = gameCharacters.filter((char) => char.found).length;
    if (
      gameCharacters.length > 0 &&
      score === gameCharacters.length
      // // NOTE - TEST WIN CONDITION. WIN BY DEFAULT TO TEST MODAL
      // if (gameCharacters.length)
    ) {
      setGameStatus("WON");
      setElapsedTime(timer);

      // NEED TO INSERT CONSEQUNCES
    }
  }, [gameCharacters]);

  return (
    <div className="GameContainer">
      <div>GameStatus tempDisplay- {gameStatus}</div>
      <div>Map tempDisplay </div>
      {gameStatus === "MAPSELECT" && (
        <MapSelect setGameStatus={setGameStatus} setMapObject={setMapObject} />
      )}

      {gameStatus !== "MAPSELECT" && (
        <>
          <GameBoard
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            gameCharacters={gameCharacters}
            setGameCharacters={setGameCharacters}
            mapObject={mapObject}
          />
          <Timer timer={timer} />
          <Score gameCharacters={gameCharacters} />
          <RemainingCharacters gameCharacters={gameCharacters} />
        </>
      )}
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
        <GameStartModal
          setGameStatus={setGameStatus}
          setTimer={setTimer}
          mapObjectMessage={mapObject.message}
          mapObjectCharacters={mapObject.characters}
        />
      )}
    </div>
  );
}
export default GameContainer;
