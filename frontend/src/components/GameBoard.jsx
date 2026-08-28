import { useState, useRef, version } from "react";

import "./GameBoard.css";

import CharacterTargetingUI from "./CharacterTargetingUI.jsx";
import DisplayFoundCharacters from "./DisplayFoundCharacters.jsx";

import gameImage from "../assets/gameImage65.jpg";

function GameBoard({ gameStatus, setGameStatus }) {
  const [verifiedCharacterCoordinates, setVerifiedCharacterCoordinates] =
    useState(false);
  const [imageBounds, setImageBounds] = useState(null);

  const imageRef = useRef(null);

  async function handleImageClick(event) {
    console.log(gameStatus);
    if (gameStatus !== "TARGETING") return;
    console.log("Somebody clicked the image!!!!");

    // Get the image's position and size in the viewport
    const imageBounds = imageRef.current.getBoundingClientRect();
    setImageBounds(imageBounds);

    // Convert viewport coordinates to image-relative coordinates
    const imageX = event.clientX - imageBounds.left;
    const imageY = event.clientY - imageBounds.top;

    console.log(imageX, imageY);

    try {
      const response = await fetch(
        `http://localhost:3000/characters/verify-location?x=${imageX}&y=${imageY}`,
      );

      const data = await response.json();
      console.log(verifiedCharacterCoordinates);

      if (data.success) {
        console.log(data.coordinates);

        alert("Yup!   " + imageX + " | " + imageY);

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

  async function handleCharacterSubmit(event) {}

  return (
    <>
      <div className="gameImage">
        <img ref={imageRef} src={gameImage} onClick={handleImageClick} />

        <CharacterTargetingUI
          verifiedCharacterCoordinates={verifiedCharacterCoordinates}
          imageBounds={imageBounds}
          handleCharacterSubmit={handleCharacterSubmit}
        />
      </div>

      <DisplayFoundCharacters />
    </>
  );
}

export default GameBoard;
