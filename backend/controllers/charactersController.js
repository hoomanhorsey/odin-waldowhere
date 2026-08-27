import charactersService from "../services/charactersService.js";

async function verifyLocation(req, res) {
  console.log("verifyfunction is being called");
  const userX = parseInt(req.query.x);
  const userY = parseInt(req.query.y);

  try {
    const matchedCharacterCoordinates = await charactersService.verifyLocation(
      userX,
      userY,
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

  try {
    const guessResult = await charactersService.verifyCharacterGuess(
      selectedCharacter,
      userX,
      userY,
    );

    console.log(guessResult);
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
  verifyLocation,
  verifyCharacterGuess,
};
