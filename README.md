To launch react server, cd frontend, then 'npm run dev', which runs the vite framework assigned as the value of 'dev' in package.json
To launch backend server, cd backend, then 'npm start' which launches the start script in package json. This runs 'node app.js'. Can also run with the command 'node app.js' without using the package.json script

APIs

- GET /characters/verify-location?x=&y=

Returns { success: true, coordinates: [x, y] } or { success: false, message: "No character found at these co-ordinates" }

Success: 200 OK
Error: 500 (server error)

- GET /characters/verify-character-guess?selectedCharacter=&x=&y=

Returns { success: true, characterId: "selectedCharacter" } or { success: false, message: "Wrong name for this character" }

Success: 200 OK
Error: 500 (server error)

- POST /save-score

Content-Type: application/json
Request: { "name": "username", "elapsedTime": n }

Returns { success: true, message: "Score saved", leaderboard: [...] } or { success: false, message: "Username invalid" }

Success: 200 OK
Error: 500 (server database error)
