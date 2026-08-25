import scoreRepository from "../repositories/scoreRepository.js";

async function addScore(name, elapsedTime) {
  console.log("from service");
  console.log(name, elapsedTime);

  const { updatedLeaderboard, newEntry } =
    await scoreRepository.addLeaderboardEntry(name, elapsedTime);

  // Find the rank of the newly created entry
  const rank =
    updatedLeaderboard.findIndex((entry) => entry.id === newEntry.id) + 1;

  const topTenLeaderboard = updatedLeaderboard.slice(0, 10);

  console.log("rank", rank);
  return { topTenLeaderboard, newEntry, rank };
}

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
  addScore,
};
