import { prisma } from "../lib/prisma.js";

// console.log("Prisma instance:", prisma);

// console.log("Characters model:", prisma.characters);

async function getCharacterArray() {
  const characterArray = await prisma.characters.findMany();
  console.log("below is my consoeltable thing");
  console.table(characterArray);
  return characterArray;
}

//   const result = await prisma.characters.findUnique({
//     where: {
//       x: x,
//       y: y,
//     },
//   });
//   return result;
// }

async function verifyCharacterGuess(charactername, x, y) {
  //insert code
}

export default {
  getCharacterArray,
  verifyCharacterGuess,
};

// async function createUser(body, hashedPassword) {
//   const newUser = await prisma.user.create({
//     data: {
//       username: body.username,
//       email: body.email,
//       password: hashedPassword,
//     },
//   });
//   console.log("User created:", newUser);
//   return newUser;
// }

// async function checkUsernameExists(username) {
//   const usernameResult = await prisma.user.findUnique({
//     where: { username: username },
//   });
//   return usernameResult;
// }

// async function checkEmailExists(email) {
//   const emailResult = await prisma.user.findUnique({
//     where: { email: email },
//   });
//   return emailResult;
// }

// export default { createUser, checkUsernameExists, checkEmailExists };
