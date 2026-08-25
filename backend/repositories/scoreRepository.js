import { prisma } from "../lib/prisma.js";

async function addLeaderboardEntry(name, elapsedTime) {
  console.log("from repo");
  console.log(name, elapsedTime);

  try {
    const newEntry = await prisma.leaderboard.create({
      data: {
        name: name,
        elapsedTime: elapsedTime,
      },
    });

    const updatedLeaderboard = await prisma.leaderboard.findMany({
      orderBy: { elapsedTime: "asc" },
    });
    return { updatedLeaderboard, newEntry };
  } catch (error) {
    console.error(("Failed to add time to leaderboard:", error));
    throw error;
  }
}

export default {
  addLeaderboardEntry,
};
