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

- **[] GameContainer/ component**
  - [] state: remainingCharacters, timer, gameStatus
- 
  - [] startGame() - displays image, starts timer
  - [] endGame() - stops timer, disables further clicks, displays score, asks user for name
  - [] markFoundCharacter()
    - [] displays name of found character
    - [] sends callback to TargetingBox to deselect character
     
  - [] **GameBoard/ component**
    - [] refreshes on game restart
    - [] displays imnage 
    - [] sendCoords() - onclick, sends cursor co-ordinates to backend for character verification

  - [] **TargetingBox/ component**
    - [] displays targeting box if co-ordinates match character
    - [] deselectCharacter() - user clicks anywhere on page to remove targeting box and charactermenu
      - [] **CharacterMenu/ component**
        - [] displays menu of remaining characters
        - [] selectCharacter(characterName) - sends User's character choice to backend for verification
  
  - [] **Timer/ component**
    - [] startTimer() - displays and starts timer on user start
  
  - [] **HighScore/ component**


  
- [] Function - getUserNameForScoreboard()

## BACKEND

**setup**
-[] initializeGame(remainingCharDB, image)

**Timer**
- [] Function - startTimer()
- [] Function - endTimer()
- [] Function - refreshTimer()
- [] Function - resetTimer()


**Scoring - check selection**
- [] Function - validateSelection(userInput, correctAnswer) 
- [] Function - handleCorrectAnswer()
- [] Function - handleIncorrectAnswer()
- [] Function - updateScore()
- [] Function - checkWinCondition(currentScore, totalPersons)
  
- [] Function - updateRemainingCharacters(remainingCharacterDb, foundCharacterId)
- [] Function - getRemainingCharacters()
  
- [] Function - restartGame()
- [] Function - resetCharacterDb()
- [] Function - resetScore() 

**Character Array**
- [] Create characterData module with hardcoded character objects (id, name, x, y coordinates)


**Scoring - record keeping**
- [] Function - updateFinalScore(userFinalScore, savedScores, username, time)
- [] Function - validateUsername
- [] Function - updateScoreDisplay

**Scoring - display**

- [] Function - getHighScores()

  


- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 