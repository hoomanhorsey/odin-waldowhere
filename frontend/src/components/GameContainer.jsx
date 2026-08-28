import { useState, version } from "react";
import "./GameContainer.css";

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

  async function handleImageClick(event) {
    console.log("Somebody clicked the image!!!!");
    console.log(event.clientX, event.clientY);

    try {
      const response = await fetch(
        `http://localhost:3000/characters/verify-location?x=${event.clientX}&y=${event.clientY}`,
      );

      const data = await response.json();
      console.log(verifiedCharacterCoordinates);

      if (data.success) {
        console.log(data.coordinates);
        //TODO
        // You want to set state so that verifiedCharacterCoorindates runs and CharacterMenuyruns.CharacterMenu
        // setVerifiedCharacterCoordinates, which triggers OutlineFound Charcater

        setVerifiedCharacterCoordinates(data.coordinates);
      } else {
        console.error(data.message);
        alert("nope!");
        setVerifiedCharacterCoordinates(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="GameContainer">
      Hello
      <GameBoard handleImageClick={handleImageClick} />
      <Timer />
      <OutlineFoundCharacter
        verifiedCharacterCoordinates={verifiedCharacterCoordinates}
      />
      <CharacterMenu />
      <DisplayFoundCharacteres />
      <GameResultModal />
      <Leaderboard />
    </div>
  );
}
export default GameContainer;
