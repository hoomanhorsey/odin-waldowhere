import { useState, useEffect, useRef } from "react";
import "../Global.css";

import "./GameContainer.css";

import MapSelect from "./MapSelect.jsx";
import GameBoard from "./GameBoard.jsx";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";
import PlayerAction from "./PlayerAction.jsx";

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
  const [leaderboard, setLeaderboard] = useState(null);
  const [timer, setTimer] = useState(0);
  const [playerAction, setPlayerAction] = useState("Get ready...");
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
        console.log("mapObject.mapId:", mapObject.mapId);
        const response = await fetch(
          `http://localhost:3000/characters/characters?mapId=${mapObject.id}`,
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

    //TEST WIN CONDITION
    if (gameCharacters.length) {
      setGameStatus("WON");
      setElapsedTime(timer);
      setPlayerAction("Everybody found!");
    }
    //NORMAL WIN CONDITION
    // if (gameCharacters.length > 0 && score === gameCharacters.length) {
    //   setGameStatus("WON");
    //   setElapsedTime(timer);
    //   setPlayerAction("Everybody found!");
    // }
  }, [gameCharacters]);

  return (
    <div>
      {gameStatus === "MAPSELECT" && (
        <>
          {" "}
          <h1>WALDO WHERE IS HE?</h1>
          <p>
            Sources from partner foreign intelligence agencies have indicated
            that notorious international terrorist Waldo and his team of terror
            makers have entered the country under false passports and plan an
            attack on a mass crowd gathering!
          </p>
          <p>
            It is understaood that Waldo and his team have already inserted
            themselves in target areas to engage in reconaissance before their
            proposed attack. We have access to spy satellite imagery that
            provides us with real time images of possible attack targets.
          </p>
          <p>
            We must as a matter of extreme urgency locate Waldo and his team
            members so that our ground teams can apprehend them. identify each
            of them to prevent them from implementing their evil plans!
          </p>
          <p>
            Choose one of the locations below to start the surveillance mission!
          </p>
          <div className="mapSelectScreen">
            <MapSelect
              setGameStatus={setGameStatus}
              setMapObject={setMapObject}
            />
          </div>
        </>
      )}
      {gameStatus !== "MAPSELECT" && (
        <>
          <GameBoard
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            gameCharacters={gameCharacters}
            setGameCharacters={setGameCharacters}
            mapObject={mapObject}
            setPlayerAction={setPlayerAction}
          />
          <div className="player-action"></div>
          <div className="player-actions">
            <PlayerAction key={playerAction} playerAction={playerAction} />
          </div>
          <div className="game-hud">
            <div className="game-hud-row">
              <Timer timer={timer} />
              <Score gameCharacters={gameCharacters} />
            </div>
            <RemainingCharacters gameCharacters={gameCharacters} />
          </div>
        </>
      )}
      {gameStatus === "WON" && (
        <GameResultsModal
          elapsedTime={elapsedTime}
          setLeaderboard={setLeaderboard}
          setGameStatus={setGameStatus}
          mapId={mapObject.id}
          setPlayerAction={setPlayerAction}
        />
      )}
      {gameStatus === "COMPLETED" && (
        <Leaderboard
          leaderboard={leaderboard}
          setGameStatus={setGameStatus}
          mapName={mapObject.name}
        />
      )}
      {gameStatus === "IDLE" && (
        <GameStartModal
          setGameStatus={setGameStatus}
          setTimer={setTimer}
          mapObjectMessage={mapObject.message}
          mapObjectCharacters={mapObject.characters}
          setPlayerAction={setPlayerAction}
        />
      )}
    </div>
  );
}
export default GameContainer;
