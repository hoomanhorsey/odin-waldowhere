import { prisma } from "../lib/prisma";

async function verifyLocation(x, y) {
  //insert code
  //     const userRecord = await charactersRepository.verifyLocation(email);
}

async function verifyCharacterGuess(charactername, x, y) {
  //insert code
}

export default {
  verifyLocation,
  verifyCharacterGuess,
};

async function createUser(body, hashedPassword) {
  const newUser = await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: hashedPassword,
    },
  });
  console.log("User created:", newUser);
  return newUser;
}

async function checkUsernameExists(username) {
  const usernameResult = await prisma.user.findUnique({
    where: { username: username },
  });
  return usernameResult;
}

async function checkEmailExists(email) {
  const emailResult = await prisma.user.findUnique({
    where: { email: email },
  });
  return emailResult;
}

module.exports = { createUser, checkUsernameExists, checkEmailExists };
