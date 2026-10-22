import scoreService from "../services/scoreService.js";

async function saveScore(req, res) {
  //access JSON from req.body
  const mapId = parseInt(req.body.mapId);
  const playerName = req.body.playerName;
  const elapsedTime = parseInt(req.body.elapsedTime);

  try {
    const { topTenLeaderboard, newEntry, rank } = await scoreService.addScore(
      mapId,
      playerName,
      elapsedTime,
    );
    console.log("toptenleaderboard from controller");
    console.table(topTenLeaderboard);
    if (topTenLeaderboard) {
      res.status(200).json({
        success: true,
        message: "Score saved",
        leaderboard: topTenLeaderboard,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Username invalid",
      });
    }
  } catch (error) {
    console.error("Error saving score: ", error);
    res.status(500).json({ success: false, message: "server database error" });
  }
}

export default {
  saveScore,
};
