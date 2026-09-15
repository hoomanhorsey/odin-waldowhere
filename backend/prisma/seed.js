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
      { name: "Waldo", x: 1585, y: 590 },
      { name: "Wilma", x: 720, y: 800 },
      { name: "Odlaw", x: 270, y: 555 },
      { name: "Wizard", x: 690, y: 545 },
    ];

    for (const char of charactersData) {
      await client.query(
        'INSERT INTO "Characters" (name, x, y) VALUES ($1, $2, $3)',
        [char.name, char.x, char.y],
      );
    }

    // create leaderboard entries
    const leaderboardData = [
      { name: "PAC-MAN", elapsedTime: 9999999 },
      { name: "DONKEY KONG", elapsedTime: 9999999 },
      { name: "GALAGA", elapsedTime: 999999 },
      { name: "SPACE INVADERS", elapsedTime: 9999999 },
      { name: "ASTEROIDS", elapsedTime: 9999999 },
      { name: "CENTIPEDE", elapsedTime: 9999999 },
      { name: "MS. PAC-MAN", elapsedTime: 9999999 },
      { name: "FROGGER", elapsedTime: 9999999 },
      { name: "DEFENDER", elapsedTime: 9999999 },
      { name: "TEMPEST", elapsedTime: 9999999 },
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
