import { useState, useRef } from "react";

import "./GameBoard.css";

import CharacterTargetingUI from "./CharacterTargetingUI.jsx";
import DisplayFoundCharacters from "./DisplayFoundCharacters.jsx";

import gameImage from "../assets/gameImage65.jpg";

function GameBoard({ gameStatus, setGameStatus }) {
  const [verifiedCharacterCoordinates, setVerifiedCharacterCoordinates] =
    useState(false);
  const [imageBounds, setImageBounds] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const imageRef = useRef(null);

  async function handleImageClick(event) {
    console.log("GAMESTATUS: " + gameStatus);
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
      console.log(verifiedCharacterCoordinates);

      if (data.success) {
        alert("Yup!   " + imageX + " | " + imageY + " | " + data.coordinates);

        //TODO
        // You want to set state so that verifiedCharacterCoorindates runs and CharacterMenuyruns.CharacterMenu
        // setVerifiedCharacterCoordinates, which triggers OutlineFound Charcater
        setVerifiedCharacterCoordinates(data.coordinates);
        setGameStatus("SELECTINGCHARACTER");
      } else {
        console.error(data.message);
        alert("nope!   " + imageX + " | " + imageY);
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

    alert("you've submitted someone good o you: " + selectedCharacter + x + y);

    try {
      const response = await fetch(
        `http://localhost:3000/characters/verify-character-guess?selectedCharacter=${selectedCharacter}&x=${x}&y=${y}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        alert("It was the right character!" + data.characterId);
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
      <div className="gameImage">
        <img ref={imageRef} src={gameImage} onClick={handleImageClick} />

        <CharacterTargetingUI
          verifiedCharacterCoordinates={verifiedCharacterCoordinates}
          imageBounds={imageBounds}
          handleCharacterSubmit={handleCharacterSubmit}
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>

      <DisplayFoundCharacters />
    </>
  );
}

export default GameBoard;
