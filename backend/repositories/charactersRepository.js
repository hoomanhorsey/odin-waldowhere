import { prisma } from "../lib/prisma.js";

async function getCharacterArray() {
  try {
    const characterArray = await prisma.characters.findMany();
    return characterArray;
  } catch (error) {
    console.error(("Failed to fetch character array:", error));
    throw error;
  }
}

/// probably delete this
async function verifyCharacterGuess(charactername, x, y) {
  //insert code
}

export default {
  getCharacterArray,
  verifyCharacterGuess,
};
