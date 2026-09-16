import { useState, useRef } from "react";

import "./GameBoard.css";

import CharacterTargetingUI from "./CharacterTargetingUI.jsx";

import gameImage from "../assets/Waldobeach_2400.jpg";

function GameBoard({
  gameStatus,
  setGameStatus,
  gameCharacters,
  setGameCharacters,
}) {
  const [verifiedCharacterCoordinates, setVerifiedCharacterCoordinates] =
    useState(false);
  const [imageBounds, setImageBounds] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const imageRef = useRef(null);

  async function handleImageClick(event) {
    if (gameStatus !== "TARGETING") return;

    // Get the image's position and size in the viewport
    const imageBounds = imageRef.current.getBoundingClientRect();
    setImageBounds(imageBounds);

    // Convert viewport coordinates to image-relative coordinates
    const imageX = event.clientX - imageBounds.left;
    const imageY = event.clientY - imageBounds.top;

    try {
      const response = await fetch(
        `http://localhost:3000/characters/verify-location?x=${imageX}&y=${imageY}`,
      );

      const data = await response.json();

      if (data.success) {
        if (
          gameCharacters.some(
            (char) =>
              char.x === data.coordinates[0] && char.y === data.coordinates[1],
          )
        ) {
          alert("Character at this location has already been found");
          return;
        }

        alert(
          "You've found somebody at co-ordinates x: " +
            Math.floor(imageX) +
            " and y: " +
            Math.floor(imageY),
        );

        //TODO
        // You want to set state so that verifiedCharacterCoorindates runs and CharacterMenuyruns.CharacterMenu
        // setVerifiedCharacterCoordinates, which triggers OutlineFound Charcater
        setVerifiedCharacterCoordinates(data.coordinates);
        setGameStatus("SELECTINGCHARACTER");
      } else {
        console.error(data.message);
        alert("Nobody there of interest. Try again");
        setVerifiedCharacterCoordinates(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCharacterSubmit(x, y) {
    if (!selectedCharacter || selectedCharacter === "Choose a character") {
      console.warn("Please select a character first");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/characters/verify-character-guess?selectedCharacter=${selectedCharacter}&x=${x}&y=${y}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("It was the right character!");

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
        alert("Wrong character");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={`gameImage ${gameStatus === "IDLE" ? "blurred" : ""}`}>
        <img ref={imageRef} src={gameImage} onClick={handleImageClick} />
        <CharacterTargetingUI
          verifiedCharacterCoordinates={verifiedCharacterCoordinates}
          imageBounds={imageBounds}
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
