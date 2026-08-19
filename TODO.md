## SETUP

**POSTGRES**
- [x] Set up PostgreSQL
- [x] Create new database as dev_user
- [x] Test connection with psql
- [] Document connection string in .env.example

**PROJECT SETUP**
- [x] Run npm init -y
- [x] Install dependencies

**PRISMA**
- [x] Install Prisma
    - [] Create Prisma Schema
        - [] Define Models 
        - [] Run `prisma migrate dev --name init`
    - [] Set up .env with DATABASE_URL
    - [] Test Prisma Connection
    - [] Create seed script 



## FRONTEND

**Image selection**
- [] Identify shortlist of images
- [] Select Image
  
**Design/map out front end**
- [] Research flexbox vs. grid vs combo - trade-offs for mobile layouts
- [] Design mobile first HTML page template (Title, Body)
- [] Include responsive breakpoints (mobile, tablet, desktop)
- [] Include features such as timer, score, persons remaining other things.
 
**UI functionality**

- [] Come back to this once I've designed the template, to add functionality relating to design.
- 
- [x] Research vanilla JS vs. React for front end user interaction - decided to go with React

- **[x] GameContainer/ component**
  - [x] **GameBoard/ component**
  - [x] **OutlineFoundCharacter/ component**
  - [x] **CharacterMenu/ component**
  - [x] **DisplayFoundCharacteres/ component**
  - [x] **Timer/ component**  
  - [x] **GameResultsModal/ component**
  - [x] **Leaderboard/ component**

## BACKEND

**gameLogic**

- [API] - verifyLocation(coordinates)  
  - frontend trigger: handleImageClick  
  - operation:  
    - calls gameDB to check if coordinates correspond with a character.  
  - returns:  
    - { success: true, coordinates: {x, y} }  
    - { success: false, error: "message" }  

- [API] - verifyCharacterGuess(selectedCharacter, userClickCoordinates)  
  - frontend trigger: handleCharacterSubmit  
  - operation:  
    - calls gameDB to check that selectedCharacter co-ordinates match range userClickCoordinates
  - returns:  
    - { success: true, characterId: 123 }  
    - { success: false, error: "incorrect selection" }  
  

**Scoring - check selection**

- [API] - saveScore(username, timeElapsed)  
  - frontend trigger: onSaveScore  
  - operation:  
    - inserts username and timeElapsed into leaderboardDB  
    - returns  
      - { success: true, message: "Score saved", leaderboard: leaderboard }
      - { success: fail, error: "Username is required", "Username exceeds 50 characters", "Database error"}  
  - [Note] - leaderboard cannot be retrieved without a save game. New API needed if there is a need to retrieve the leaderboard separately.  

**Timer**

Possible time verification backend  

- startStartTime()  
- when game starts front end sends a request to  backed for a timestamp, which it returns and saves as  start time in state.  Then when game ends, the frontend sends a request to backend for another timestamp, which it returns and saves in state.  
- Then the endtime is subtracted from the start time. If there is a greater than 5 second difference between this time period and the time elapsed then the game will throw and error and say there is a timing irregularlity.


**Character Array**
- [] Create characterData module with hardcoded character objects (id, name, x coordinates, y coordinates, found)


