import charactersRepository from "../repositories/charactersRepository.js";

const IMAGE_SIZE = 1000;
const TOLERANCE_FACTOR = 20;
const TOLERANCE = IMAGE_SIZE / TOLERANCE_FACTOR;

//test this API
//http://localhost:3000/characters/characters
async function getCharacters() {
  console.log("getCharacters service is called");
  const characterArray = await charactersRepository.getCharacterArray();

  if (characterArray) {
    return characterArray.map((char) => ({
      id: char.id,
      name: char.name,
      found: char.found,
    }));
  }
  return [];
}

//test this API
//http://localhost:3000/characters/verify-location?x=399&y=399
async function verifyLocation(userX, userY) {
  console.log("verifyLocation called");
  const characterArray = await charactersRepository.getCharacterArray();

  const matchedCharacter = matchCharacterCoordinates(
    characterArray,
    userX,
    userY,
  );

  if (matchedCharacter) {
    return {
      success: true,
      coordinates: [matchedCharacter.x, matchedCharacter.y],
    };
  }
  return false;
}

// verifyCharacterGuess is only called after a character has been found
// at these coordinates via verifyLocation, so matchedCharacter is guaranteed

// test this API
// http://localhost:3000/characters/verify-character-guess?selectedCharacter=Paul%20McCartney&x=399&y=399
async function verifyCharacterGuess(selectedCharacter, userX, userY) {
  console.log("verifyCharacterGuess called");

  const characterArray = await charactersRepository.getCharacterArray();

  const matchedCharacter = matchCharacterCoordinates(
    characterArray,
    userX,
    userY,
  );
  return selectedCharacter === matchedCharacter.name;
}

function matchCharacterCoordinates(characterArray, userX, userY) {
  const matchedCharacter = characterArray.find((character) => {
    return (
      userX <= character.x + TOLERANCE &&
      userX >= character.x - TOLERANCE &&
      userY <= character.y + TOLERANCE &&
      userY >= character.y - TOLERANCE
    );
  });
  return matchedCharacter;
}

export default {
  getCharacters,
  verifyLocation,
  verifyCharacterGuess,
};
