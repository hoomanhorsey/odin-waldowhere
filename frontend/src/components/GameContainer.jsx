import { useState, version } from "react";

import GameBoard from "./GameBoard.jsx";
import Timer from "./Timer.jsx";

import GameResultModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";

function GameContainer() {
  const [gameStatus, setGameStatus] = useState("IDLE");
  const [gameCharacters, setGameCharacters] = useState(
    "get from API later I think",
  );
  const [elapsedTime, setElapsedTime] = useState(0);
  const [userClickCoordinates, setUserClickCoordinates] = useState(false);

  const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [leaderboard, setLeaderboard] = useState(null);

  return (
    <div className="GameContainer">
      Hello
      <GameBoard />
      <Timer />
      <GameResultModal />
      <Leaderboard />
    </div>
  );
}
export default GameContainer;
