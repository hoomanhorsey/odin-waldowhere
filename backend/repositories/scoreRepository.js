import { prisma } from "../lib/prisma.js";

async function addTimeToLeaderboard(name, elapsedTime) {
  try {
    const newEntry = await prisma.leaderboard.create({
      data: {
        name: name,
        elapsedTime: elapsedTime,
      },
    });

    const leaderboard = await prisma.leaderboard.findMany({
      orderBy: { elapsedTime: "asc" },
    });

    // Find the rank of the newly created entry
    const rank = leaderboard.findIndex((entry) => entry.id === newEntry.id) + 1;

    return { leaderboard, newEntry, rank };
  } catch (error) {
    console.error(("Failed to add time to leaderboard:", error));
    throw error;
  }
}

export default {
  addTimeToLeaderboard,
};
