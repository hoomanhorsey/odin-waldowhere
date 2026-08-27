import { useState } from "react";

import GameBoard from "./GameBoard.jsx";
import OutlineFoundCharacter from "./OutlineFoundCharacter.jsx";
import Timer from "./Timer.jsx";
import CharacterMenu from "./CharacterMenu.jsx";
import DisplayFoundCharacteres from "./DisplayFoundCharacters.jsx";
import GameResultModal from "./GameResultsModal.jsx";
import Leaderboard from "./Leaderboard.jsx";
function GameContainer() {
  const [gameStatus, setGameStatus] = useState("IDLE");
  const [gameCharacters, setGameCharacters] = useState(
    "get from API later I think",
  );
  const [elapsedTime, setElapsedTime] = useState(0);
  const [userClickCoordinates, setUserClickCoordinates] = useState(false);
  const [verifiedCharacterCoordinates, setVerifiedCharacterCoordinates] =
    useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [leaderboard, setLeaderboard] = useState(null);

  function handleImageClick() {
    console.log("Somebody clicked the image!!!!");
    console.log(event.clientX, event.clientY);
  }

  return (
    <>
      Hello
      <GameBoard handleImageClick={handleImageClick} />
      <Timer />
      <OutlineFoundCharacter />
      <CharacterMenu />
      <DisplayFoundCharacteres />
      <GameResultModal />
      <Leaderboard />
    </>
  );
}

export default GameContainer;
