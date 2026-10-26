import { prisma } from "../lib/prisma.js";

async function addLeaderboardEntry(mapId, name, elapsedTime) {
  try {
    const newEntry = await prisma.leaderboard.create({
      data: {
        name: name,
        elapsedTime: elapsedTime,
        mapId: mapId,
      },
    });

    const updatedLeaderboard = await prisma.leaderboard.findMany({
      where: { mapId: mapId },
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
