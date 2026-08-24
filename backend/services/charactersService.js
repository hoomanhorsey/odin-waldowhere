import charactersRepository from "../repositories/charactersRepository.js";

async function verifyLocation(userX, userY) {
  const characterArray = await charactersRepository.getCharacterArray();

  console.log("characterArray:", characterArray); // Debug: is it populated?
  console.log("userX:", userX, "userY:", userY); // Debug: are values correct?
  const imageSize = 1000;
  const toleranceFactor = 20;
  const tolerance = imageSize / toleranceFactor;

  const matchedCharacter = characterArray.find((character) => {
    return (
      userX <= character.x + tolerance &&
      userX >= character.x - tolerance &&
      userY <= character.y + tolerance &&
      userY >= character.y - tolerance
    );
  });

  if (matchedCharacter) {
    console.log("matched - coordinates");
    console.log(matchedCharacter);
    return [matchedCharacter.x, matchedCharacter.y];
  }
  console.log("no match");
  return false;
}

async function verifyCharacterGuess(charactername, x, y) {
  //insert code
}
export default {
  verifyLocation,
  verifyCharacterGuess,
};
