import scoreRepository from "../repositories/scoreRepository.js";

async function addScore(mapId, name, elapsedTime) {
  const { updatedLeaderboard, newEntry } =
    await scoreRepository.addLeaderboardEntry(mapId, name, elapsedTime);

  // Find the rank of the newly created entry
  const rank =
    updatedLeaderboard.findIndex((entry) => entry.id === newEntry.id) + 1;

  const topTenLeaderboard = updatedLeaderboard.slice(0, 10);

  console.log("rank", rank);
  console.log("toptenleaderboard from service");
  console.table(topTenLeaderboard);
  return { topTenLeaderboard, newEntry, rank };
}

export default {
  addScore,
};
