import charactersService from "../services/charactersService.js";

async function verifyLocation(req, res) {
  console.log("verifyfunction is being called");
  const userX = parseInt(req.query.x);
  const userY = parseInt(req.query.y);

  try {
    const matchedCharacterCoordinates = await charactersService.verifyLocation(
      userX,
      userY,
    );

    if (matchedCharacterCoordinates) {
      res
        .status(200)
        .json({ found: true, coordinates: matchedCharacterCoordinates });
    } else {
      res.status(200).json({ found: false, coordinates: null });
    }
  } catch (error) {
    console.error("Error verifying location: ", error);
    res.status(500).json({ error: "Failed to verify location" });
  }
}

async function verifyCharacterGuess(req, res) {
  //insert code
}

export default {
  verifyLocation,
  verifyCharacterGuess,
};

///// old functions below
// async function handleLogin(req, res) {
//   try {
//     const errors = validationResult(req);

//     // initial validation
//     if (!errors.isEmpty()) {
//       console.log(errors);
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, password } = req.body;
//     // check db to ensure email exists
//     const userRecord = await authRepository.checkEmailExists(email);
//     if (!userRecord) {
//       return res.status(401).json({ message: "Invalid Credentials" });
//     }
//     // check password match
//     const match = await bcrypt.compare(password, userRecord.password);
//     if (!match) {
//       return res.status(401).json({ message: "Invalid Credentials" });
//     }

//     const opts = { expiresIn: 60 * 60 * 10 }; //token expires in 10 hourss
//     const secret = process.env["SECRET_KEY"];
//     const token = jwt.sign(
//       {
//         userId: userRecord.id,
//         role: userRecord.role,
//         username: userRecord.username,
//       },
//       secret,
//       opts,
//     );
//     return res.status(200).json({
//       message: "Auth Passed",
//       token,
//       user: {
//         id: userRecord.id,
//         username: userRecord.username,
//         role: userRecord.role,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ error: "Login failed" });
//   }
// }

// async function handleSignup(req, res) {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log(errors);
//     return res.status(400).json({ errors: errors.array() });
//   }
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     await authRepository.createUser(req.body, hashedPassword);
//     res.status(201).json({ message: "Account created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something went wrong please try again");
//   }
// }

// async function handleLogout(req, res) {
//   try {
//     res.status(200).json({ message: "Logged out successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Logout failed" });
//   }
// }
