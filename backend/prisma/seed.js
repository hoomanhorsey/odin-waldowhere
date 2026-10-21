import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

const mapsData = [
  {
    name: "Beach",
    filename: "Waldobeach_2400.jpg",
    message:
      "It's a beautiful sunny day and Waldo and his gang have hit the beach. Catch them before they ruin things for everyone!",
    characters: [
      { name: "Waldo", x: 1485, y: 540 },
      { name: "Wilma", x: 675, y: 750 },
      { name: "Wizard Whitebeard", x: 650, y: 505 },
      { name: "Odlaw", x: 260, y: 505 },
    ],
    leaderboard: [
      { name: "Pac-Man", elapsedTime: 36000000 },
      { name: "Donkey Kong", elapsedTime: 37200000 },
      { name: "Mario", elapsedTime: 38400000 },
      { name: "Luigi", elapsedTime: 39600000 },
      { name: "Kirby", elapsedTime: 40800000 },
      { name: "Link", elapsedTime: 42000000 },
      { name: "Zelda", elapsedTime: 43200000 },
      { name: "Samus", elapsedTime: 44400000 },
      { name: "Mega Man", elapsedTime: 45600000 },
      { name: "Sonic", elapsedTime: 46800000 },
    ],
  },

  {
    name: "Department Store",
    filename: "Waldostore_2400.jpg",
    message:
      "Waldo and his gang have gone shopping. Quickly find them before they give themselves five finger discounts!",

    characters: [
      { name: "Waldo", x: 1180, y: 320 },
      { name: "Wilma", x: 840, y: 1300 },
      { name: "Odlaw", x: 550, y: 1290 },
    ],
    leaderboard: [
      { name: "Ryu", elapsedTime: 36000000 },
      { name: "Ken", elapsedTime: 37200000 },
      { name: "Chun-Li", elapsedTime: 38400000 },
      { name: "Guile", elapsedTime: 39600000 },
      { name: "Jill Valentine", elapsedTime: 40800000 },
      { name: "Chris Redfield", elapsedTime: 42000000 },
      { name: "Leon Kennedy", elapsedTime: 43200000 },
      { name: "Claire Redfield", elapsedTime: 44400000 },
      { name: "Castlevania", elapsedTime: 45600000 },
      { name: "Simon Belmont", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Feast",
    filename: "Waldofeast_2400.jpg",
    message:
      "Waldo and his gang are hungry and are going to ruin everyone's dinner.  Quickly find them!",

    characters: [
      { name: "Waldo", x: 1600, y: 620 },
      { name: "Wilma", x: 1090, y: 580 },
      { name: "Wizard Whitebeard", x: 2380, y: 1500 },
    ],
    leaderboard: [
      { name: "Richter Belmont", elapsedTime: 36000000 },
      { name: "Alucard", elapsedTime: 37200000 },
      { name: "Contra", elapsedTime: 38400000 },
      { name: "Cody", elapsedTime: 39600000 },
      { name: "Guy", elapsedTime: 40800000 },
      { name: "Jessica", elapsedTime: 42000000 },
      { name: "Haggar", elapsedTime: 43200000 },
      { name: "Cammy", elapsedTime: 44400000 },
      { name: "Zangief", elapsedTime: 45600000 },
      { name: "M. Bison", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Snow",
    filename: "Waldosnow_2400.jpg",
    message:
      "It's freezing and Waldo and his gang are hitting the snowfields. Find them quickly to put a freeze on their plans!",

    characters: [
      { name: "Waldo", x: 1630, y: 905 },
      { name: "Wendy", x: 940, y: 515 },
      { name: "Wizard Whitebeard", x: 130, y: 925 },
      { name: "Odlaw", x: 605, y: 775 },
    ],
    leaderboard: [
      { name: "Vega", elapsedTime: 36000000 },
      { name: "Balrog", elapsedTime: 37200000 },
      { name: "Dhalsim", elapsedTime: 38400000 },
      { name: "Blanka", elapsedTime: 39600000 },
      { name: "E. Honda", elapsedTime: 40800000 },
      { name: "Fei Long", elapsedTime: 42000000 },
      { name: "Cammy", elapsedTime: 43200000 },
      { name: "T. Hawk", elapsedTime: 44400000 },
      { name: "Dee Jay", elapsedTime: 45600000 },
      { name: "Juri", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Town",
    filename: "Waldotown_2400.jpg",
    message:
      "Waldo and his gang are hitting the town. Find them so we can declare the streets safe again!",

    characters: [
      { name: "Waldo", x: 1040, y: 1130 },
      { name: "Wilma", x: 1050, y: 895 },
      { name: "Wizard Whitebeard", x: 1580, y: 1155 },
    ],
    leaderboard: [
      { name: "Chun-Li", elapsedTime: 36000000 },
      { name: "Sonya Blade", elapsedTime: 37200000 },
      { name: "Liu Kang", elapsedTime: 38400000 },
      { name: "Johnny Cage", elapsedTime: 39600000 },
      { name: "Sub-Zero", elapsedTime: 40800000 },
      { name: "Scorpion", elapsedTime: 42000000 },
      { name: "Raiden", elapsedTime: 43200000 },
      { name: "Goro", elapsedTime: 44400000 },
      { name: "Shao Kahn", elapsedTime: 45600000 },
      { name: "Noob Saibost", elapsedTime: 46800000 },
    ],
  },
];

async function main() {
  const client = await pool.connect();
  try {
    console.log("seeding...");

    // delete existing data
    await client.query('DELETE FROM "Leaderboard"');
    await client.query('DELETE FROM "Characters"');
    await client.query('DELETE FROM "Map"');

    for (const mapData of mapsData) {
      // Insert map
      const mapResult = await client.query(
        'INSERT INTO "Map" (name, filename, message) VALUES ($1, $2, $3) RETURNING id',
        [mapData.name, mapData.filename, mapData.message],
      );

      const mapId = mapResult.rows[0].id;
      console.log(`Created map: ${mapData.name} (ID: ${mapId})`);

      for (const char of mapData.characters) {
        await client.query(
          'INSERT INTO "Characters" (name, x, y, "mapId") VALUES ($1, $2, $3, $4)',
          [char.name, char.x, char.y, mapId],
        );
      }

      for (const entry of mapData.leaderboard) {
        await client.query(
          'INSERT INTO "Leaderboard" (name, "elapsedTime", "mapId") VALUES ($1, $2, $3)',
          [entry.name, entry.elapsedTime, mapId],
        );
      }
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
