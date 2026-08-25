import charactersRepository from "../repositories/charactersRepository.js";

const IMAGE_SIZE = 1000;
const TOLERANCE_FACTOR = 20;
const TOLERANCE = IMAGE_SIZE / TOLERANCE_FACTOR;

//test this API
//http://localhost:3000/characters/verify-location?x=399&y=399
async function verifyLocation(userX, userY) {
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
  const characterArray = await charactersRepository.getCharacterArray();

  const matchedCharacter = matchCharacterCoordinates(
    characterArray,
    userX,
    userY,
  );
  return selectedCharacter === matchedCharacter.name;
}

export default {
  verifyLocation,
  verifyCharacterGuess,
};

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
