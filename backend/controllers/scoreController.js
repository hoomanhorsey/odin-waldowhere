import scoreService from "../services/scoreService.js";

async function saveScore(req, res) {
  //access JSON from req.body
  const name = req.body.name;
  const elapsedTime = parseInt(req.body.elapsedTime);

  console.log(name, elapsedTime);

  try {
    const { topTenLeaderboard, newEntry, rank } = await scoreService.addScore(
      name,
      elapsedTime,
    );

    console.table(topTenLeaderboard);
    console.log(newEntry);

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
