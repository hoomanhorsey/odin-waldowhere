import charactersRepository from "../repositories/charactersRepository.js";

async function verifyLocation() {
  const characterArray = await charactersRepository.getCharacterArray();

  characterArray.map((character) => {
    console.log(character.username);
  });

  return characterArray;
}

async function verifyCharacterGuess(charactername, x, y) {
  //insert code
}
export default {
  verifyLocation,
  verifyCharacterGuess,
};
