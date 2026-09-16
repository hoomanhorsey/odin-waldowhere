import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

const mapsData = [
  {
    name: "Beach",
    filename: "Waldobeach_2400.jpg",
    characters: [
      { name: "Waldo", x: 450, y: 320 },
      { name: "Wilma", x: 1200, y: 680 },
      { name: "Wizard Whitebeard", x: 800, y: 450 },
      { name: "Odlaw", x: 1800, y: 900 },
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
    name: "Library",
    filename: "Waldolibrary_2400.jpg",
    characters: [
      { name: "Waldo", x: 600, y: 250 },
      { name: "Wilma", x: 1400, y: 720 },
      { name: "Wizard Whitebeard", x: 950, y: 380 },
      { name: "Odlaw", x: 2000, y: 950 },
    ],
    leaderboard: [
      { name: "Tails", elapsedTime: 36000000 },
      { name: "Knuckles", elapsedTime: 37200000 },
      { name: "Bowser", elapsedTime: 38400000 },
      { name: "Peach", elapsedTime: 39600000 },
      { name: "Yoshi", elapsedTime: 40800000 },
      { name: "Pikachu", elapsedTime: 42000000 },
      { name: "Charizard", elapsedTime: 43200000 },
      { name: "Blastoise", elapsedTime: 44400000 },
      { name: "Venusaur", elapsedTime: 45600000 },
      { name: "Dragonite", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Mountain",
    filename: "Waldomountain_2400.jpg",
    characters: [
      { name: "Waldo", x: 700, y: 400 },
      { name: "Wilma", x: 1100, y: 650 },
      { name: "Wizard Whitebeard", x: 1400, y: 200 },
      { name: "Odlaw", x: 1950, y: 850 },
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
    name: "City",
    filename: "Waldocity_2400.jpg",
    characters: [
      { name: "Waldo", x: 520, y: 480 },
      { name: "Wilma", x: 1350, y: 350 },
      { name: "Wizard Whitebeard", x: 1650, y: 700 },
      { name: "Odlaw", x: 2100, y: 600 },
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
    name: "Forest",
    filename: "Waldoforest_2400.jpg",
    characters: [
      { name: "Waldo", x: 650, y: 550 },
      { name: "Wilma", x: 1250, y: 400 },
      { name: "Wizard Whitebeard", x: 1700, y: 650 },
      { name: "Odlaw", x: 2050, y: 750 },
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
    name: "Museum",
    filename: "Waldomuseum_2400.jpg",
    characters: [
      { name: "Waldo", x: 580, y: 320 },
      { name: "Wilma", x: 1450, y: 620 },
      { name: "Wizard Whitebeard", x: 850, y: 750 },
      { name: "Odlaw", x: 1950, y: 450 },
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
      { name: "Noob Saibot", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Airport",
    filename: "Waldoairport_2400.jpg",
    characters: [
      { name: "Waldo", x: 720, y: 380 },
      { name: "Wilma", x: 1200, y: 550 },
      { name: "Wizard Whitebeard", x: 1600, y: 300 },
      { name: "Odlaw", x: 2150, y: 800 },
    ],
    leaderboard: [
      { name: "Ermac", elapsedTime: 36000000 },
      { name: "Smoke", elapsedTime: 37200000 },
      { name: "Reptile", elapsedTime: 38400000 },
      { name: "Baraka", elapsedTime: 39600000 },
      { name: "Jade", elapsedTime: 40800000 },
      { name: "Kitana", elapsedTime: 42000000 },
      { name: "Sindel", elapsedTime: 43200000 },
      { name: "Mileena", elapsedTime: 44400000 },
      { name: "Sheeva", elapsedTime: 45600000 },
      { name: "Nightwolf", elapsedTime: 46800000 },
    ],
  },
  {
    name: "Carnival",
    filename: "Waldocarnival_2400.jpg",
    characters: [
      { name: "Waldo", x: 480, y: 320 },
      { name: "Wilma", x: 1300, y: 700 },
      { name: "Wizard Whitebeard", x: 1750, y: 400 },
      { name: "Odlaw", x: 1850, y: 950 },
    ],
    leaderboard: [
      { name: "Stryker", elapsedTime: 36000000 },
      { name: "Sonya", elapsedTime: 37200000 },
      { name: "Jax", elapsedTime: 38400000 },
      { name: "Kung Lao", elapsedTime: 39600000 },
      { name: "Kung Fu Master", elapsedTime: 40800000 },
      { name: "Dig Dug", elapsedTime: 42000000 },
      { name: "Galaga", elapsedTime: 43200000 },
      { name: "Centipede", elapsedTime: 44400000 },
      { name: "Ms. Pac-Man", elapsedTime: 45600000 },
      { name: "Space Invaders", elapsedTime: 46800000 },
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
        'INSERT INTO "Map" (name, filename) VALUES ($1, $2) RETURNING id',
        [mapData.name, mapData.filename],
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
