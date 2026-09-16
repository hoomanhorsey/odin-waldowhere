import { prisma } from "../lib/prisma.js";

async function getMapsArray() {
  try {
    const mapsArray = await prisma.map.findMany();
    // console.table(mapsArray);
    return mapsArray;
  } catch (error) {
    console.error("Failed to fetch maps array:", error);
    throw error;
  }
}
async function getCharacterArray() {
  try {
    const characterArray = await prisma.characters.findMany();
    return characterArray;
  } catch (error) {
    console.error("Failed to fetch character array:", error);
    throw error;
  }
}

export default {
  getMapsArray,
  getCharacterArray,
};
