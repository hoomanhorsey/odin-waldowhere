APIs

- GET /characters/verify-location?x=&y=

Returns { success: true, coordinates: [x, y] } or { success: false, message: "No character found at these co-ordinates" }

Success: 200 OK
Error: 500 (server error)

- GET /characters/verify-guess?selectedCharacter=&x=&y=

Returns { success: true, characterId: "selectedCharacter" } or { success: false, message: "Wrong name for this character" }

Success: 200 OK
Error: 500 (server error)

- POST /save-score

Content-Type: application/json
Request: { "name": "username", "elapsedTime": n }

Returns { success: true, message: "Score saved", leaderboard: [...] } or { success: false, message: "Username invalid" }

Success: 200 OK
Error: 500 (server database error)
