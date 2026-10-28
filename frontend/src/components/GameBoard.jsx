import { useState, useRef } from "react";
import "./GameBoard.css";
import CharacterTargetingUI from "./CharacterTargetingUI.jsx";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function GameBoard({
  gameStatus,
  setGameStatus,
  gameCharacters,
  setGameCharacters,
  mapObject,
  setPlayerAction,
}) {
  const [verifiedCharacterCoordinates, setVerifiedCharacterCoordinates] =
    useState(false);
  // const [imageBounds, setImageBounds] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const imageRef = useRef(null);

  async function handleImageClick(event) {
    if (gameStatus !== "TARGETING") return;

    // Get the image's position and size in the viewport
    const imageBounds = imageRef.current.getBoundingClientRect();
    // setImageBounds(imageBounds);

    // Convert viewport coordinates to image-relative coordinates
    const imageX = event.clientX - imageBounds.left;
    const imageY = event.clientY - imageBounds.top;

    try {
      const response = await fetch(
        `${backendURL}/characters/verify-location?mapId=${mapObject.id}&x=${imageX}&y=${imageY}`,
      );

      const data = await response.json();

      if (data.success) {
        if (
          gameCharacters.some(
            (char) =>
              char.x === data.coordinates[0] && char.y === data.coordinates[1],
          )
        ) {
          setPlayerAction("You've already found someone here. WAKE UP!");

          setTimeout(() => {
            setPlayerAction("Searching...");
          }, 2000);

          // alert("Character at this location has already been found");
          return;
        }
        setPlayerAction("You've found somebody!");

        //TODO
        // You want to set state so that verifiedCharacterCoorindates runs and CharacterMenuyruns.CharacterMenu
        // setVerifiedCharacterCoordinates, which triggers OutlineFound Charcater
        setVerifiedCharacterCoordinates(data.coordinates);
        setGameStatus("SELECTINGCHARACTER");
      } else {
        console.error(data.message);

        setPlayerAction("Nobody there of interest. Keep looking");

        setTimeout(() => {
          setPlayerAction("Searching...");
        }, 2000);

        setVerifiedCharacterCoordinates(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCharacterSubmit(x, y) {
    if (!selectedCharacter || selectedCharacter === "Choose a character") {
      return;
    }

    try {
      const response = await fetch(
        `${backendURL}/characters/verify-character-guess?mapId=${mapObject.id}&selectedCharacter=${selectedCharacter}&x=${x}&y=${y}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setPlayerAction("Correct! Good find!");

        setTimeout(() => {
          setPlayerAction("Searching...");
        }, 3000);

        const updatedGameCharacters = gameCharacters.map((char, i) => {
          if (char.name === selectedCharacter) {
            return { ...char, x: x, y: y, found: true };
          }
          return char;
        });
        setGameCharacters(updatedGameCharacters); // sets the found property of the found character to true
        setVerifiedCharacterCoordinates(false); // resets as false, which removes CharacterTargetingUI
        setSelectedCharacter(""); // resets menu character select
        setGameStatus("TARGETING");
      } else {
        console.error(data.message);
        setPlayerAction("WRONG! Try again.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={`gameImage ${gameStatus === "IDLE" ? "blurred" : ""}`}>
        <img
          ref={imageRef}
          src={`assets/${mapObject.filename}`}
          onClick={handleImageClick}
        />
        <CharacterTargetingUI
          verifiedCharacterCoordinates={verifiedCharacterCoordinates}
          imageBounds={imageRef.current?.getBoundingClientRect()}
          handleCharacterSubmit={handleCharacterSubmit}
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
          gameCharacters={gameCharacters}
        />
      </div>
    </>
  );
}

export default GameBoard;
