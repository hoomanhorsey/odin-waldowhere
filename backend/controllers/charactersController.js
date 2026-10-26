import charactersService from "../services/charactersService.js";

async function getMaps(req, res) {
  try {
    const maps = await charactersService.getMapsArray();
    if (maps) {
      res.status(200).json({
        success: true,
        maps: maps,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No maps found in db",
      });
    }
  } catch (error) {
    console.error("Error accessing db: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

async function getCharacters(req, res) {
  try {
    const mapId = parseInt(req.query.mapId);
    const characters = await charactersService.getCharacters(mapId);

    if (characters) {
      res.status(200).json({
        success: true,
        characters: characters,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No characters found in db",
      });
    }
  } catch (error) {
    console.error("Error accessing db: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

async function verifyLocation(req, res) {
  const userX = parseInt(req.query.x);
  const userY = parseInt(req.query.y);
  const mapId = parseInt(req.query.mapId);

  try {
    const matchedCharacterCoordinates = await charactersService.verifyLocation(
      userX,
      userY,
      mapId,
    );

    if (matchedCharacterCoordinates) {
      res.status(200).json({
        success: true,
        coordinates: matchedCharacterCoordinates.coordinates,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No character found at these co-ordinates",
      });
    }
  } catch (error) {
    console.error("Error verifying location: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

async function verifyCharacterGuess(req, res) {
  const selectedCharacter = req.query.selectedCharacter;
  const userX = parseInt(req.query.x);
  const userY = parseInt(req.query.y);
  const mapId = parseInt(req.query.mapId);

  try {
    const guessResult = await charactersService.verifyCharacterGuess(
      selectedCharacter,
      userX,
      userY,
      mapId,
    );

    if (guessResult) {
      res.status(200).json({
        success: true,
        characterId: selectedCharacter,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Wrong name for this character",
      });
    }
  } catch (error) {
    console.error("Error verifying character: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}

export default {
  getMaps,
  getCharacters,
  verifyLocation,
  verifyCharacterGuess,
};
