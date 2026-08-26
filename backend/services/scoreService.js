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

export default {
  addScore,
};
