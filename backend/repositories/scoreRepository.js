import { prisma } from "../lib/prisma.js";

async function addLeaderboardEntry(mapId, name, elapsedTime) {
  console.log("from repo");
  console.log(name, elapsedTime);
  console.log(mapId);

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
