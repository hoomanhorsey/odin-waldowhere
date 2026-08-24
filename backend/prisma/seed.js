import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

async function main() {
  const client = await pool.connect();
  try {
    console.log("seeding...");

    // delete existing data
    await client.query('DELETE FROM "Leaderboard"');
    await client.query('DELETE FROM "Characters"');

    // create characters
    const charactersData = [
      { name: "John Lennon", x: 100, y: 100 },
      { name: "Paul McCartney", x: 400, y: 400 },
      { name: "Ringo Starr", x: 700, y: 700 },
      { name: "George Harrison", x: 1000, y: 1000 },
    ];

    for (const char of charactersData) {
      await client.query(
        'INSERT INTO "Characters" (name, x, y) VALUES ($1, $2, $3)',
        [char.name, char.x, char.y],
      );
    }

    // create leaderboard entries
    const leaderboardData = [
      { name: "PAC-MAN", elapsedTime: 999999999 },
      { name: "DONKEY KONG", elapsedTime: 999999998 },
      { name: "GALAGA", elapsedTime: 999999997 },
      { name: "SPACE INVADERS", elapsedTime: 999999996 },
      { name: "ASTEROIDS", elapsedTime: 999999995 },
      { name: "CENTIPEDE", elapsedTime: 999999994 },
      { name: "MS. PAC-MAN", elapsedTime: 999999993 },
      { name: "FROGGER", elapsedTime: 999999992 },
      { name: "DEFENDER", elapsedTime: 999999991 },
      { name: "TEMPEST", elapsedTime: 999999990 },
    ];

    for (const entry of leaderboardData) {
      await client.query(
        'INSERT INTO "Leaderboard" (name, "elapsedTime") VALUES ($1, $2)',
        [entry.name, entry.elapsedTime],
      );
    }

    console.log("seeding done!");
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
