import { prisma } from "../lib/prisma.js";

async function getCharacterArray() {
  try {
    const characterArray = await prisma.characters.findMany();
    return characterArray;
  } catch (error) {
    console.error(("Failed to fetch character array:", error));
    throw error;
  }
}

/// probably delete this
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
